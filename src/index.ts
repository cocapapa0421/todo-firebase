import "./scss/styles.scss";
import Todo from "./components/Todo/Todo";
import db from "./config/config";

function witData<T extends { new (...args: any): any }>(Component: T) {
  class TodoWithData {
    constructor(private selector: string) {
      this.init();
    }

    private async getData() {
      let data: any = await db.ref("todoapp-ae180-default-rtdb").once("value");
      return data.val();
    }

    private async init() {
      const data: any = await this.getData();
      if (data) {
        return new Component(this.selector, {
          status: "idle",
          data: Object.entries(data),
          idEdit: "",
        });
      }
      return new Component(this.selector, {
        status: "idle",
        data: [],
        idEdit: "",
      });
    }
  }

  return TodoWithData;
}

const TodoWithData = witData(Todo);
new TodoWithData("#app");

// const startButton: HTMLButtonElement = document.getElementById(
//   "startSupport"
// ) as HTMLButtonElement;

// startButton.addEventListener("click", (event) => {
//   const supporter = JSON.parse(window.localStorage.getItem("supporter")!);
//   if (!supporter) {
//     const queryString = window.location.search;
//     const params = new URLSearchParams(queryString);
//     const position = params.get("position");

//     if (position) {
//       window.localStorage.setItem(
//         "supporter",
//         JSON.stringify({ status: "online", position })
//       );
//       (event.currentTarget as HTMLButtonElement).remove();
//       new TodoWithData("#app");
//     }
//   }
// });

// window.onload = function () {
//   const supporter = JSON.parse(window.localStorage.getItem("supporter")!);
//   const queryString = window.location.search;
//   const params = new URLSearchParams(queryString);
//   const position = params.get("position");

//   if (position && supporter && supporter.position !== position) {
//     window.localStorage.removeItem("supporter");
//     window.location.reload();
//   } else if (supporter) {
//     startButton.remove();
//     new TodoWithData("#app");
//   }
// };
