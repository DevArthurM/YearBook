import  sqlite3 from "sqlite3";
import { open } from "sqlite";

export default async function openDatabase() {
    return open({
        filename: "./../DataBase/YearBook.db",
        driver: sqlite3.Database,
    })
}