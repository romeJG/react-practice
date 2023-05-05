
function Header() {
    return (
        <header>
            <nav class="row">
                <img class="col-2" src="./files/react-logo.png"></img>
                <h1 class="col-4">Why am I excited learning React</h1>
            </nav>
        </header>
    )
}
function MainContent() {
    return (
        <ol>
            <li>Because it's gonna make my web development easier</li>
            <li>It's gonna make my skill set broader</li>
            <li>It's really interesting to learn</li>
            <li>Would be a great addition while i'm looking for work.</li>
            <li>So that my coding skills wont go away while i'm looking for work</li>
        </ol>
    )
}
function Footer() {
    return (
        <footer>© 2023 Guillermo Development. All rights reserved</footer>
    )
}


ReactDOM.render(
    <div>
        <Header />
        <MainContent />
        <Footer />
    </div>
    ,
    document.getElementById("root")
)