JavaScript DOM & Events – Notes

While learning DOM manipulation and event handling in JavaScript, I came across some interesting concepts that I think are worth documenting. Instead of writing them like exam answers, I’m trying to explain them in a way that feels natural, just like my own notes.

Working with the DOM

When we want to access elements in the DOM, there are a few different ways, and each of them has its own purpose.

getElementById is the most straightforward one. It only works when the element has an id, and since ids are unique, it always returns just one element.

getElementsByClassName feels a bit different. It doesn’t return just one thing, but a collection (kind of like an array, but not exactly an array) of all elements that share that class.

Then there’s querySelector and querySelectorAll. These are super flexible because they let us use CSS selectors. For example, querySelector(".btn") gives me the first element with that class, while querySelectorAll(".btn") gives me all of them.

So the choice really depends on what we need—if I know the id, I’ll just grab it directly. But if I want to target something more general with a CSS selector, querySelector is usually my go-to.

Creating and Inserting New Elements

At some point, I also needed to create new elements instead of just working with existing ones. JavaScript makes this possible with document.createElement("tagName"). For example:

let newDiv = document.createElement("div");
newDiv.textContent = "Hello World!";
document.body.appendChild(newDiv);


Here, I first create a div, add some text to it, and then insert it into the body. There are also other insertion methods like prepend, insertBefore, or even innerHTML (though I try to avoid that when possible for security reasons).

Event Bubbling

One of the tricky things I learned was how event bubbling works. Basically, when I click on a child element, the event doesn’t just stop there—it moves upward through its parent elements, one by one, until it reaches the root (document). So if both a button and its container have click listeners, clicking the button will trigger the button’s listener first, and then the container’s.

At first, this confused me because sometimes events were firing twice, but once I understood bubbling, it made sense.

Event Delegation

This led me to event delegation. Instead of adding the same event listener to lots of child elements, I can just add one listener to the parent and let bubbling do the rest. Inside the handler, I check which child triggered it by using event.target.

This is really useful when I’m working with lists or elements that are created dynamically. Instead of attaching new listeners every time something is added, I just let the parent handle it. It’s cleaner and more efficient.

preventDefault vs stopPropagation

Finally, I had to wrap my head around preventDefault() and stopPropagation(), because they sound similar but do totally different things.

preventDefault() is about stopping the default behavior of an element. For example, when I click a link, it normally takes me to another page. If I use preventDefault(), the click still happens, but the navigation doesn’t.

stopPropagation(), on the other hand, is about stopping the event flow. It prevents the event from moving up to parent elements. So if I don’t want bubbling to happen, I can use this.

At first, I mixed these two up, but now I think of it this way: one controls the browser’s default action, the other controls how the event travels in the DOM.

Conclusion

These concepts might seem small, but together they form the foundation of working with the DOM and handling user interactions properly. Knowing when to use which method (like direct selection vs. delegation) can make code much cleaner and more efficient.

This is my attempt to explain what I’ve learned in my own words. Hopefully, it helps me (or anyone reading this) remember the logic behind these concepts instead of just memorizing definitions.
