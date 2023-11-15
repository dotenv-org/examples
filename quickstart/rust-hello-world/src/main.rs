fn main() {
    let _ = dotenv_vault::dotenv();

    let hello = std::env::var("HELLO").unwrap_or("".to_string());

    println!("Hello {hello}");
}
