
function Page() {
    const header = <h1>Why am I exited learning React</h1>
    const list = (
        <ol>
            <li>Because it's gonna make my web development easier</li>
            <li>It's gonna make my skill set broader</li>
            <li>It's really interesting to learn</li>
            <li>Would be a great addition while i'm looking for work.</li>
            <li>So that my coding skills wont go away while i'm looking for work</li>
        </ol>
    )
    return [header, list]
}


ReactDOM.render(<Page />, document.getElementById("root"))