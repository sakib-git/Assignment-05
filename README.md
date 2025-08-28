questions

1. What is the difference between getElementById, 
getElementsByClassName, and querySelector / querySelectorAll?

2. How do you create and insert a new element into the DOM?
3. What is Event Bubbling and how does it work?
4. What is Event Delegation in JavaScript? Why is it useful?
5. What is the difference between preventDefault() and stopPropagation() methods?

Answer

1.
* getElementById => getElementById diye ekta id dhora kora jai;
* getElementsByClassName => getElementsByClassName diye ek name er onek gula class ek sathe dhora kora jai;
* querySelector => querySelector diye ekta class  dhora jai;
* * querySelectorAll => querySelectorAll diye ek name er onek gula class ek sathe dhora kora jai;

2.
const newParagraph = document.createElement('p');
newParagraph.innerText = ``;
parentDiv.appenChild(newParagraph)

3.
Event Bubbling => child -> parent -> body - html

4.
 Event Delegration 
 parent elemenet er child a kono event listener na lagaya shob child elem er parent a ekta event listener lagano e event delegation

5.
preventDefault() => event er default behavior off kora dey
stopPropagation() => stopPropagation() jekhane deya hoy oi jaigai stop hoye jai;