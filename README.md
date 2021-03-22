# addinex-test

In total, where around 7 hrs, dusting off my node.js, mongoose, mongodb, react,
frontend stuff (like material UI for looking goood 😉 and sagas skills, getting
back on track with tooling npm, npx, etc...getting to know more about sagas,
specially in the form of react-redux-sagas + new stuff on next.js, well,
it's been fun! 😁

I actually found about `saga-slice`, tried to make it work (those where about
2 hrs) and in the end found about what blocked me so much to get it up and
running was the SSR of next.js, so FYI, works only in client mode because
there's a dependency around it where it calls `window` and that's only on
client-side mode, I could dive in the code of saga-slice and make a
`window == undefined` guard but as right now I don't know what would that
entail, anyways, maybe tech debt? Because saga-slice seems cool, like with
it's plugins to do CRUD like almost automatically also with the Axios
plugin `createApi`, and seems nuts, in a good way.

I hope this will be enough to get to know how I love to dive in and develop
stuff, and I'm eager to belong to the AddinexTech team!

---

## Excerpt of the actual task document -- just to remind me of what to use

Required for Front-End: Next.js, Redux.js, Typescript,

Required for Back-end: Node.js and Express.js, with Mongoose.

Bonus: We use Redux sagas on our application, this project is small to use it
and it is notrequired, but you get bonus points to show your understanding
of sagas.

Extra Packages: You can use any other libraries for utility to your own liking,
you can choose what ever network library to use.
