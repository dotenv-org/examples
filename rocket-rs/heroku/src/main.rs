#![feature(proc_macro_hygiene, decl_macro)]

#[macro_use] extern crate rocket;

#[get("/")]
fn index() -> String {
    let hello = std::env::var("HELLO").unwrap_or("".to_string());
    format!("Hello {}.", hello)
}

fn main() {
    let _ = dotenv_vault::dotenv();

    rocket::ignite().mount("/", routes![index]).launch();
}

