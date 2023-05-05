/**
 * * I made a UL that has an id of myList
 * @param1 what to render into the param2
 * @param2 choose the element in the HTML
 */
ReactDOM.render(<ul id="myList"></ul>,
    document.getElementById("root")
)
/**
 * * i used the ul that has an ID of myList that will put the two
 * * <li> that is in an array that into the ul
 * @param1 renders the LI
 * @param2 choose the element in the HTML
 */
ReactDOM.render([<li>One</li>, <li>Two</li>],
    document.getElementById("myList")
)
