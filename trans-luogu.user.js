// ==UserScript==
// @name         Trans Luogu
// @version      1.4
// @description  洛谷的蓝粉白化
// @author       RaineMtF
// @license      MIT
// @run-at       document-end
// @match        *://*.luogu.com.cn/*
// @match        *://*.luogu.com/*
// @match        *://luogu.com.cn/*
// @match        *://luogu.com/*
// @exclude      *://ti.luogu.com.cn/*
// @exclude      *://class.luogu.com.cn/*
// @connect      *
// @updateURL    https://github.com/RaineMtF/trans-luogu/raw/refs/heads/main/trans-luogu.user.js
// @downloadURL  https://github.com/RaineMtF/trans-luogu/raw/refs/heads/main/trans-luogu.user.js
// @supportURL   https://github.com/RaineMtF/trans-luogu
// @homepageURL  https://github.com/RaineMtF/trans-luogu
// @icon         data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJtYXJnaW4tYm90dG9tOiAtM3B4OyI+PHBhdGggZmlsbD0iI0U1RTRERiIgZD0ibTI3Ny4wNzkgMTcuMDI4bDMuNTQ0LTUuMDU5YzEyLjg0NC0xOC4zMzQgNDEuMzUzLTEyLjY2MyA0Ni4yMDQgOS4xOWwxLjMzOCA2LjAzYzMuODY5IDE3LjQzNCAyMy44ODQgMjUuNzI0IDM4Ljk0OCAxNi4xMzNsNS4yMTEtMy4zMThjMTguODgzLTEyLjAyMyA0My4wNTEgNC4xMjYgMzkuMTcgMjYuMTcybC0xLjA3MSA2LjA4NGMtMy4wOTcgMTcuNTg4IDEyLjIyMiAzMi45MDYgMjkuODEgMjkuODFsNi4wODQtMS4wNzFjMjIuMDQ2LTMuODgyIDM4LjE5NSAyMC4yODcgMjYuMTcyIDM5LjE3bC0zLjMxOCA1LjIxMWMtOS41OTIgMTUuMDY0LTEuMzAxIDM1LjA3OSAxNi4xMzMgMzguOTQ4bDYuMDMgMS4zMzhjMjEuODU0IDQuODUgMjcuNTI0IDMzLjM1OSA5LjE5IDQ2LjIwNGwtNS4wNTkgMy41NDRjLTE0LjYyNiAxMC4yNDctMTQuNjI2IDMxLjkxMSAwIDQyLjE1N2w1LjA1OSAzLjU0NGMxOC4zMzQgMTIuODQ0IDEyLjY2MyA0MS4zNTMtOS4xOSA0Ni4yMDRsLTYuMDMgMS4zMzhjLTE3LjQzNCAzLjg2OS0yNS43MjQgMjMuODg0LTE2LjEzMyAzOC45NDhsMy4zMTggNS4yMTFjMTIuMDIzIDE4Ljg4My00LjEyNiA0My4wNTEtMjYuMTcyIDM5LjE3bC02LjA4NC0xLjA3MWMtMTcuNTg4LTMuMDk3LTMyLjkwNiAxMi4yMjItMjkuODEgMjkuODFsMS4wNzEgNi4wODRjMy44ODIgMjIuMDQ2LTIwLjI4NyAzOC4xOTUtMzkuMTcgMjYuMTcybC01LjIxMS0zLjMxOGMtMTUuMDY0LTkuNTkyLTM1LjA3OS0xLjMwMS0zOC45NDggMTYuMTMzbC0xLjMzOCA2LjAzYy00Ljg1IDIxLjg1NC0zMy4zNTkgMjcuNTI0LTQ2LjIwNCA5LjE5bC0zLjU0NC01LjA1OWMtMTAuMjQ3LTE0LjYyNi0zMS45MTEtMTQuNjI2LTQyLjE1NyAwbC0zLjU0NCA1LjA1OWMtMTIuODQ0IDE4LjMzNC00MS4zNTMgMTIuNjYzLTQ2LjIwNC05LjE5bC0xLjMzOC02LjAzYy0zLjg2OS0xNy40MzQtMjMuODg0LTI1LjcyNC0zOC45NDgtMTYuMTMzbC01LjIxMSAzLjMxOGMtMTguODgyIDEyLjAyMy00My4wNTEtNC4xMjYtMzkuMTctMjYuMTcybDEuMDcxLTYuMDg0YzMuMDk3LTE3LjU4OC0xMi4yMjItMzIuOTA2LTI5LjgxLTI5LjgxbC02LjA4NCAxLjA3MWMtMjIuMDQ2IDMuODgyLTM4LjE5NS0yMC4yODctMjYuMTcyLTM5LjE3bDMuMzE4LTUuMjExYzkuNTkyLTE1LjA2NCAxLjMwMS0zNS4wNzktMTYuMTMzLTM4Ljk0OGwtNi4wMy0xLjMzOGMtMjEuODU0LTQuODUtMjcuNTI0LTMzLjM1OS05LjE5LTQ2LjIwNGw1LjA1OS0zLjU0NGMxNC42MjYtMTAuMjQ3IDE0LjYyNi0zMS45MTEgMC00Mi4xNTdsLTUuMDU5LTMuNTQ0Yy0xOC4zMzQtMTIuODQ0LTEyLjY2My00MS4zNTMgOS4xOS00Ni4yMDRsNi4wMy0xLjMzOGMxNy40MzQtMy44NjkgMjUuNzI0LTIzLjg4NCAxNi4xMzMtMzguOTQ4bC0zLjMxOC01LjIxMWMtMTIuMDIzLTE4Ljg4MiA0LjEyNi00My4wNTEgMjYuMTcyLTM5LjE3bDYuMDg0IDEuMDcxYzE3LjU4OCAzLjA5NyAzMi45MDYtMTIuMjIyIDI5LjgxLTI5LjgxbC0xLjA3MS02LjA4NGMtMy44ODItMjIuMDQ2IDIwLjI4Ny0zOC4xOTUgMzkuMTctMjYuMTcybDUuMjExIDMuMzE4YzE1LjA2NCA5LjU5MiAzNS4wNzkgMS4zMDEgMzguOTQ4LTE2LjEzM2wxLjMzOC02LjAzYzQuODUtMjEuODU0IDMzLjM1OS0yNy41MjQgNDYuMjA0LTkuMTlsMy41NDQgNS4wNTljMTAuMjQ2IDE0LjYyNyAzMS45MSAxNC42MjcgNDIuMTU3IDAiLz48cGF0aCBmaWxsPSIjRkZBMUUwIiBkPSJtOTYuMTI4IDI4Ny4zNzdsLS4wOC0yLjcxOWwtLjA5OC0zLjMzNGMtLjAxMi0uNjcyLS4wNTgtMS4zNTMtLjA0Ni0yLjE2NWwuMDYxLTIuNjI2Yy4wNzEtMS44NS4wNzktMy45NjkuMjMzLTYuMjE4bC41OTUtNy4zMjJjLjM1NC0yLjYyNS42ODYtNS40NjIgMS4xNDQtOC40NzdsLjg0Ny00LjY0MWwuNDQ3LTIuNDI5Yy4xNjctLjgxNy4zNzUtMS42MzcuNTY3LTIuNDczbDEuMjQ3LTUuMTQxYy40NzMtMS43NDYgMS4wMjMtMy41MTcgMS41NTUtNS4zNDNsLjgyNS0yLjc2N2wuOTcyLTIuNzg3Yy42OC0xLjg3IDEuMjc5LTMuODI0IDIuMDc0LTUuNzQ0YzIuOTU3LTcuNzc5IDYuODktMTUuOTMgMTEuODAxLTI0LjI1OWM0LjkzOS04LjMxMSAxMS4wMDQtMTYuNzEyIDE4LjI1Ny0yNC44NjdjNy4yNDQtOC4xNiAxNS43NjctMTUuOTgzIDI1LjQ3NC0yMy4xMjhjOS42ODItNy4xODUgMjAuNzE5LTEzLjQzNSAzMi43NTctMTguNTU0YzUuOTk5LTIuNjIzIDEyLjMyNy00LjczOSAxOC44MTMtNi43MDZjMS42My0uNDYgMy4yODQtLjg1OSA0LjkzNy0xLjI4N2MxLjY1OC0uNDA4IDMuMzExLS44ODQgNS4wMDQtMS4xOTJjMy4zNzQtLjY3NSA2Ljc2Ny0xLjQzNCAxMC4yMzMtMS44ODZjMS43MjktLjI1MiAzLjQ2Mi0uNTM5IDUuMjA4LS43NThsNS4yNzEtLjUyNmwyLjY1Mi0uMjU5bDIuNjY2LS4xNDFsNS4zNjQtLjI1NmwuNjczLS4wMzFoNS45MzRjLjQyNC4wMDQuNzgyLS4wMTIgMS4zMDcuMDIybDIuOTQ2LjE0N2M0LjAzNC4xNjIgNy42NTQuNjE0IDExLjQyNiAxLjA1OWMxNC45NjcgMi4wOTggMzAuMDE0IDYuNjY4IDQ0LjA4NiAxMy44ODdhMTQxLjIgMTQxLjIgMCAwIDEgMzguMjI5IDI5LjAyN2MxMS4xNTkgMTEuOTM5IDIwLjI0MiAyNi4xMzcgMjYuNjQxIDQxLjYzOGM2LjM5NSAxNS40OTMgMTAuMDk2IDMyLjM1IDEwLjQ1NCA0OS4zMzljLjI4NCA4LjE4Ny0uNDE4IDE3LjY4MS0yLjExOSAyNi4yMDhhMTE4IDExOCAwIDAgMS04LjA5NCAyNS4yNzFjLTEuNzk3IDQuMDU4LTMuODk2IDcuOTc0LTYuMTMyIDExLjgwNGMtMS4xOTEgMS44NjktMi4zMzYgMy43NzItMy41OTYgNS41OTVjLTEuMjg1IDEuODA1LTIuNTEgMy42NTctMy45MDEgNS4zODNjLTUuNDAyIDcuMDIzLTExLjU2IDEzLjQ2NC0xOC4zNzggMTkuMTAxYy0xMy42NTMgMTEuMjI0LTI5Ljc5NyAxOS40OTItNDYuOTA1IDIzLjUxMmExMTguNiAxMTguNiAwIDAgMS0yNS45MTcgMy4yNTFsLS44MTIuMDJsLS40MDYuMDA5Yy4zMTUuMDA5LS45MDYtLjAwNC0uODg1LS4wMDRsLTEuMzUyLS4wMzJsLTIuNzYxLS4wNzNsLTMuNzE1LS4yNTVjLS42MDUtLjA1MS0xLjI2Ni0uMDg3LTEuODI1LS4xNTVsLTEuNjc4LS4yMDZjLTQuNDgtLjQ5Mi04Ljg5OC0xLjQxNC0xMy4yNDUtMi41MThjLTQuMzQyLTEuMTQzLTguNTgtMi42MDktMTIuNzA4LTQuMjk4Yy00LjA5Mi0xLjc2Ny04LjExMS0zLjY4OC0xMS45MDYtNS45NjdjLTMuNzk0LTIuMjczLTcuNDUzLTQuNzQ4LTEwLjg2OC03LjVjLTEuNzQzLTEuMzMyLTMuMzY2LTIuODAyLTUuMDEyLTQuMjM2Yy0uODA4LS43MzMtMS41ODUtMS41LTIuMzc0LTIuMjUxYTQ4IDQ4IDAgMCAxLTIuMzA0LTIuMzExYy0zLjA1NC0zLjA5OC01Ljc4Mi02LjQ3My04LjM3OS05LjkwOWMtMi41MzMtMy40ODgtNC44ODMtNy4wOS02LjkwNy0xMC44NTVhOTggOTggMCAwIDEtOS4wOS0yMy42MTNjLS40NDYtMi4wNDItLjk0Ni00LjA2OC0xLjI1Ny02LjEyMmwtLjUwNS0zLjA2OGwtLjM2Ny0zLjA3NmMtLjI4My0yLjA0NC0uMzI2LTQuMS0uNDY2LTYuMTRjLS4wNTMtMS4wMjEtLjAzOS0yLjA0LS4wNTctMy4wNThsLS4wMTItMS41MjVsLS4wMDQtLjc2MWMtLjAwNC0uMDMyLjAxNy0xLjE0Ni4wMTUtLjgxN2wuMDE0LS4zMDZsLjEwOS0yLjQ0MWwuMDE3LS4zMjlsLjAzMy0uNDQzbC4wNjktLjg4NmwuMTUxLTEuNzY4Yy4wNTYtLjU3NC4xMDEtMS4yMDkuMTc0LTEuNzI5bC4yMTktMS41N2MuMTU3LTEuMDQ0LjI3Ni0yLjA5MS40OTItMy4xMjNjLjcwOS00LjE1MSAxLjgzMS04LjE5OCAzLjE2MS0xMi4xMjVjNS40MTgtMTUuNzQgMTUuNjYyLTI4Ljk0NyAyNy45ODktMzguMTEyYzEyLjQwMS05LjEzNiAyNi45My0xNC4yNjkgNDAuOTY4LTE1LjI1NWMxLjc1NS0uMDk1IDMuNS0uMjAyIDUuMjMyLS4xOTdsMi41ODkuMDIxbDEuNDYyLjAzM2wuNTA5LjA0N2wxLjAxNi4wOTRsMi4wMjQuMTg3bDEuMDA4LjA5M2wuNTExLjA0OWwuNzQyLjExMWMxLjk3OC4zMDIgMy45NC42NDIgNS44NzIgMS4wMTZsLjcyMy4xNDJsLjYzNC4xNzdsMS4yNjMuMzU4bDIuNTA2LjczYzEuNjc1LjQ0OSAzLjI2NCAxLjEyMSA0Ljg0NiAxLjc2OGMxLjU4LjY1IDMuMTU4IDEuMjY0IDQuNjI4IDIuMDkyYzEuNDgzLjc5MyAyLjk4IDEuNTM0IDQuMzk0IDIuMzg4YzUuNjY2IDMuNDMyIDEwLjU3MyA3LjYzMSAxNC43MzEgMTIuMTk5bDIuOTM5IDMuNTM3Yy45NDggMS4xODQgMS43NSAyLjQ3MSAyLjYwNCAzLjY5M2wxLjI0MiAxLjg0OGwxLjA4MyAxLjkyOWMuNzAxIDEuMjkgMS40MjQgMi41NSAyLjA1OSAzLjg0YzEuMTI0IDIuNjU4IDIuMzcyIDUuMTk4IDMuMTAzIDcuODg4Yy4zOTcgMS4zMy44NSAyLjYyNiAxLjE2IDMuOTQ4bC44MTUgMy45NTNjLjEyMS42NTQuMjc3IDEuMjk2LjM2IDEuOTQ5bC4yMSAxLjk1M2wuMzc1IDMuODRjLjA0OSAxLjI2OS4wMjggMi41MjcuMDM0IDMuNzY4bC0uMDA5IDEuODQ5bC0uMDEuOTE2Yy4wMDUtLjA1Mi0uMDM5IDEuMzEtLjAzMi44MThsLS4wMjIuMTgzbC0uMDQ0LjM2NGwtLjM1MSAyLjg4MmwtLjA0My4zNTZsLS4wMjMuMTgzbC0uMDQ0LjI1NmwtLjE4IDEuMDE3bC0uMzgyIDIuMDFsLS40MDkgMS45NzNjLS4xMy42NzYtLjMzNiAxLjE3NC0uNTAyIDEuNzYybC0xLjA2NiAzLjMzOGMtMS42OSA0LjI5LTMuNjQzIDguMjI2LTYuMTAzIDExLjUzYy0xLjExOSAxLjcyMi0yLjQ3MiAzLjE5OC0zLjcxMiA0LjY2OGMtLjYwMi43NS0xLjMxNSAxLjM4Ni0xLjk3MyAyLjA0NGwtMS45ODEgMS45MDJjLTEuMzk3IDEuMTQxLTIuNzUxIDIuMjM1LTQuMDk5IDMuMjI0Yy0xLjQxMS45MTItMi43NDQgMS44Mi00LjA4NSAyLjU5NGMtNS4zODggMy4xMDgtMTAuNTAxIDQuNTMxLTE0LjU4NyA1LjMyNWwtMi45MDUuNDg5Yy0uOTE2LjA4Ni0xLjc3MS4xMzgtMi41NTkuMTk1bC0yLjE3LjEzMmMtLjY2LjAwNS0xLjI1OS0uMDM0LTEuNzg5LS4wNDhsLTMuMjAyLS4xMzdhNi45NjQgNi45NjQgMCAwIDEtLjk3My0xMy44MDZsLjk3Mi0uMTc4bDIuMjI0LS40MTFjLjM2My0uMDcxLjc3MS0uMTI0IDEuMjE1LS4yMjZsMS40MzgtLjQxOWwxLjY2OC0uNDY1bDEuODM3LS43MzFjMi41NjItMS4wNTIgNS42MjItMi41ODkgOC41OTMtNS4xMjlhMzAuMyAzMC4zIDAgMCAwIDcuOTU1LTEwLjI0Yy4yNDUtLjU0NS41My0xLjA3My43NjMtMS42MzRsLjYxLTEuNzM5Yy4xLS4yOTIuMjI0LS41NzYuMzEzLS44NzRsLjIyNS0uOTE2Yy4xNDctLjYxMy4zMzMtMS4yMTcuNDcxLTEuODRsLjI4NS0xLjkxN2MuMDM0LS4zMDMuMTQ1LS42NzguMTI0LS45MjNsLjAxMi0uNzg1bC4wNDQtLjc3OGwuMDM0LS4zODhsLjAxLS4wOTdsLS4wMDMtLjE3M2wtLjAwNy0uMzU5bC0uMDU5LTIuOTAzbC0uMDA3LS4zNjdsLS4wMDQtLjE4NGMuMDEyLS42MTQtLjAxOS42MjYtLjAyNS40NTFsLS4wODQtLjU1N2wtLjE1OC0xLjExN2MtLjExLS43NDYtLjE4MS0xLjUtLjMwNi0yLjI1bC0uNTUyLTIuMjM2bC0uMjYtMS4xMjhjLS4wOTQtLjM3NS0uMjU5LS43MzUtLjM4Mi0xLjEwNWwtLjc3Mi0yLjIyMWMtLjI3Ni0uNzM4LS42NzUtMS40MzktLjk5NC0yLjE2N2MtLjU4NS0xLjQ4My0xLjUzNi0yLjgyNC0yLjMwMi00LjI1NWMtLjQ1Mi0uNjgxLS45NjktMS4zMy0xLjQzOC0yLjAwOGwtLjcxNy0xLjAxMWwtLjgzOS0uOTM0Yy0uNTcyLS42MTMtMS4wNjUtMS4yOTItMS42ODEtMS44NzRhOTIgOTIgMCAwIDEtMS44NTgtMS43NDJjLTIuNjA2LTIuMTk3LTUuNDQ5LTQuMjE4LTguNjQ0LTUuNjk4Yy0uNzk1LS4zNy0xLjY0MS0uNjQyLTIuNDUtLjk4OWMtLjc5Ni0uMzgyLTEuNjczLS41NzEtMi41MjQtLjgxOGMtLjg1My0uMjQ2LTEuNjkyLS41MzktMi41OS0uNjQxbC0xLjMxOC0uMjU0bC0uNjU3LS4xMzZsLS4zMjgtLjA3bC0uMjYxLS4wMDlhMTggMTggMCAwIDEtMi4wNDgtLjE5MmwtLjI1NC0uMDQxbC0uNDk3LS4wMDZsLTEuMDEyLS4wMDlsLTIuMDMzLS4wMThsLTEuMDIxLS4wMDlsLS41MTEtLjAwNGMxLjU3Mi4wMzkuMzI3LjAyMS42MjkuMDM0bC0uMTg5LjAxN2wtMS41MTYuMTI1Yy0xLjAxMi4wODEtMi4wMTYuMjUxLTMuMDI0LjM4NGMtNC4wMDguNzA5LTcuOTkyIDEuODAzLTExLjc3NCAzLjU1NGMtLjk2MS4zOTYtMS44Ny45MjEtMi44MSAxLjM3N2MtLjkuNTQxLTEuODM3IDEuMDE0LTIuNzEgMS42MTNjLTEuNzkxIDEuMTEyLTMuNDkxIDIuMzk4LTUuMTExIDMuNzg5Yy0xLjY1IDEuMzU1LTMuMTgxIDIuODc1LTQuNjE5IDQuNDg2YTQxIDQxIDAgMCAwLTMuOTYxIDUuMTZhNDAgNDAgMCAwIDAtMy4xOCA1LjczYy0uOTAzIDEuOTk3LTEuNzMzIDQuMDQtMi4zMzggNi4xNjZjLS42MDggMi4xMjItMS4xMzggNC4yODItMS40MDUgNi41MDNjLS4xMDUuNTQ4LS4xMjIgMS4xMTItLjE4OCAxLjY2OGwtLjA4Ny44MzZjLS4wMzIuMjgzLS4wMTcuNDU4LS4wMzIuNjkxbC0uMDM0LjY1OGwtLjAyMy4zMjlsLS4wMTMuMTY0bC0uMDA0LjI4bC0uMDE1IDIuNDQzbC4xODcgMy4zNDVjLjE1NyAxLjIyNy4yMDMgMi40Ny40MTYgMy42OTJsLjI1OCAxLjg0M2wuMzU2IDEuODI5Yy4xOTggMS4yMjkuNTU4IDIuNDI0LjgzNiAzLjYzOWMyLjYxMSA5LjYxNyA3LjczMyAxOC43NjkgMTQuOTk0IDI2LjE2NmMuNDM3LjQ3OC45MDQuOTI3IDEuMzgzIDEuMzY0Yy40NzYuNDQuOTM1LjkgMS40MTkgMS4zMzJjLjk5OC44MzEgMS45NTIgMS43MTggMy4wMDUgMi40ODljMi4wMzUgMS42MjkgNC4yMjcgMy4wNjQgNi40OCA0LjM5NmMyLjIzMyAxLjM3MyA0LjYxNyAyLjQ4NyA3LjAxOSAzLjU2MWMyLjQzNy45OTUgNC45MjggMS44OCA3LjQ4OCAyLjU2NWMyLjU2Ny42NDYgNS4xNjggMS4yMzIgNy44MjkgMS41MTdsLjk5NC4xMzRjLjMzMi4wNDYuNTcxLjA0NC44Ni4wNzJhNTUgNTUgMCAwIDEgMS42NjUuMTU0bDIuNjM5LjA4bDEuMzUxLjAzN2MuMjMyLjAwNy0uNzUtLjAxMS0uMjA5LS4wMDhsLjI3LS4wMDhsLjU0LS4wMTVhNzguNyA3OC43IDAgMCAwIDE3LjE2NS0yLjA3OWMxMS4yNzYtMi42MTMgMjIuMDI1LTcuODcyIDMxLjIyMi0xNS4yNDhjOS4xNDUtNy40MjUgMTYuNzE0LTE2LjkzNyAyMS43NS0yNy42NmE3OS40IDc5LjQgMCAwIDAgNS43NjMtMTYuNzc5YzEuMjUyLTUuOTU4IDEuODI2LTExLjI2NyAxLjc3Ny0xNy44MWMtLjA0OC02LjI0My0uNTg2LTEyLjQ2Ny0xLjcyMi0xOC41NjhhMTA0IDEwNCAwIDAgMC01LjAxMy0xNy44NTljLTQuMzg4LTExLjU1MS0xMC44MzktMjIuMjU1LTE4LjgyNi0zMS41Yy04LjAxMS05LjIzMS0xNy41Ni0xNi45NTQtMjcuOTQ2LTIyLjg0Yy0xMC4zODQtNS45MTItMjEuNjM2LTkuODc1LTMzLjAyNS0xMS45OTVjLTIuODM5LS40NTItNS43OTktLjk0Ny04LjM1OS0xLjE1OWwtMS45ODQtLjIyOGMtLjI5NC0uMDQ4LS43NTktLjA1Ni0xLjE1Ny0uMDhsLTEuMjMtLjA2MmwtMi40NTUtLjEyNGwtMS4yMjUtLjA2MmwtLjMwNi0uMDE1Yy0uNDU0LS4wMDkuMjczLS4wMDcuMS0uMDA2aC0uNTVsLTQuMzg5LS4wMDlsLTIuMTg3LS4wMDJsLTIuMTc0LjEwOGwtNC4zMzQuMjA0Yy0xLjQzNi4xMDgtMi44NjIuMjc4LTQuMjg5LjQxYy0yLjg2Mi4yMTItNS42NjIuNzEzLTguNDYzIDEuMTE2Yy0xLjQwNy4xNzItMi43NzYuNTA4LTQuMTU1Ljc3MmwtNC4xMTcuODM0Yy01LjQxNyAxLjMyLTEwLjc1MiAyLjc0LTE1LjgzOSA0LjYzMmMtMTAuMjEzIDMuNjU5LTE5LjcyNyA4LjMzNC0yOC4yNzEgMTMuODE2Yy0xNy4xMzQgMTAuOTQ4LTMwLjUwMiAyNC42NDItNDAuMTMyIDM4LjMxNGMtNC44MzcgNi44MzQtOC44NjYgMTMuNjMzLTEyLjAxMyAyMC4yMThjLS44NDMgMS42MjItMS40OTYgMy4yODYtMi4yMzQgNC44NzdsLTEuMDYzIDIuMzc2bC0uOTIzIDIuMzdjLS41OTkgMS41NjYtMS4yMiAzLjA4OC0xLjc2NyA0LjU5M2wtMS40NzYgNC40NDhjLS4yNC43MjMtLjUwMSAxLjQzMS0uNzE5IDIuMTRsLS42MDEgMi4xMWwtMS4xNTggNC4wNDdjLS42NjUgMi42MzktMS4yMDQgNS4xMzctMS43NTggNy40NTdsLTEuMTcxIDYuNTA4Yy0uMzMzIDEuOTg0LS41IDMuNzM5LS43MjggNS4zNDNsLS4zMSAyLjI1N2MtLjA5NC43MTQtLjEyNyAxLjQ2Mi0uMTg3IDIuMTExbC0uMjY3IDMuMzI1bC0uMjE3IDIuNzEyYTcgNyAwIDAgMS03LjU0IDYuNDJjLTMuNTg1LS4yODYtNi4zMjItMy4yNjItNi40MzktNi43NzMiLz48L3N2Zz4=
// ==/UserScript==

(function() {
    'use strict';

    // 对齐 svg 别忘了加 style="margin-bottom: -3px;"

    // 蓝粉白钩
    const img1 = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" style="margin-bottom: -3px;"><defs><clipPath id="myClip"><path d="M16 8C16 6.84375 15.25 5.84375 14.1875 5.4375C14.6562 4.4375 14.4688 3.1875 13.6562 2.34375C12.8125 1.53125 11.5625 1.34375 10.5625 1.8125C10.1562 0.75 9.15625 0 8 0C6.8125 0 5.8125 0.75 5.40625 1.8125C4.40625 1.34375 3.15625 1.53125 2.34375 2.34375C1.5 3.1875 1.3125 4.4375 1.78125 5.4375C0.71875 5.84375 0 6.84375 0 8C0 9.1875 0.71875 10.1875 1.78125 10.5938C1.3125 11.5938 1.5 12.8438 2.34375 13.6562C3.15625 14.5 4.40625 14.6875 5.40625 14.2188C5.8125 15.2812 6.8125 16 8 16C9.15625 16 10.1562 15.2812 10.5625 14.2188C11.5938 14.6875 12.8125 14.5 13.6562 13.6562C14.4688 12.8438 14.6562 11.5938 14.1875 10.5938C15.25 10.1875 16 9.1875 16 8ZM11.4688 6.625L7.375 10.6875C7.21875 10.8438 7 10.8125 6.875 10.6875L4.5 8.3125C4.375 8.1875 4.375 7.96875 4.5 7.8125L5.3125 7C5.46875 6.875 5.6875 6.875 5.8125 7.03125L7.125 8.34375L10.1562 5.34375C10.3125 5.1875 10.5312 5.1875 10.6562 5.34375L11.4688 6.15625C11.5938 6.28125 11.5938 6.5 11.4688 6.625Z"></path></clipPath></defs><rect fill="#5BCEFA" width="16" height="16" clip-path="url(#myClip)" /><rect fill="#F5A9B8" width="16" height="9.6" y="3.2" clip-path="url(#myClip)" /><rect fill="#FFFFFF" width="16" height="3.2" y="6.4" clip-path="url(#myClip)" /></svg>';
    // 粉钩
    const img2 = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="#F5A9B8" style="margin-bottom: -3px;"><path d="M16 8C16 6.84375 15.25 5.84375 14.1875 5.4375C14.6562 4.4375 14.4688 3.1875 13.6562 2.34375C12.8125 1.53125 11.5625 1.34375 10.5625 1.8125C10.1562 0.75 9.15625 0 8 0C6.8125 0 5.8125 0.75 5.40625 1.8125C4.40625 1.34375 3.15625 1.53125 2.34375 2.34375C1.5 3.1875 1.3125 4.4375 1.78125 5.4375C0.71875 5.84375 0 6.84375 0 8C0 9.1875 0.71875 10.1875 1.78125 10.5938C1.3125 11.5938 1.5 12.8438 2.34375 13.6562C3.15625 14.5 4.40625 14.6875 5.40625 14.2188C5.8125 15.2812 6.8125 16 8 16C9.15625 16 10.1562 15.2812 10.5625 14.2188C11.5938 14.6875 12.8125 14.5 13.6562 13.6562C14.4688 12.8438 14.6562 11.5938 14.1875 10.5938C15.25 10.1875 16 9.1875 16 8ZM11.4688 6.625L7.375 10.6875C7.21875 10.8438 7 10.8125 6.875 10.6875L4.5 8.3125C4.375 8.1875 4.375 7.96875 4.5 7.8125L5.3125 7C5.46875 6.875 5.6875 6.875 5.8125 7.03125L7.125 8.34375L10.1562 5.34375C10.3125 5.1875 10.5312 5.1875 10.6562 5.34375L11.4688 6.15625C11.5938 6.28125 11.5938 6.5 11.4688 6.625Z"></path></svg>';
    // 鱼板钩
    const img3 = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 512 512" style="margin-bottom: -3px;"><path fill="#E5E4DF" d="m277.079 17.028l3.544-5.059c12.844-18.334 41.353-12.663 46.204 9.19l1.338 6.03c3.869 17.434 23.884 25.724 38.948 16.133l5.211-3.318c18.883-12.023 43.051 4.126 39.17 26.172l-1.071 6.084c-3.097 17.588 12.222 32.906 29.81 29.81l6.084-1.071c22.046-3.882 38.195 20.287 26.172 39.17l-3.318 5.211c-9.592 15.064-1.301 35.079 16.133 38.948l6.03 1.338c21.854 4.85 27.524 33.359 9.19 46.204l-5.059 3.544c-14.626 10.247-14.626 31.911 0 42.157l5.059 3.544c18.334 12.844 12.663 41.353-9.19 46.204l-6.03 1.338c-17.434 3.869-25.724 23.884-16.133 38.948l3.318 5.211c12.023 18.883-4.126 43.051-26.172 39.17l-6.084-1.071c-17.588-3.097-32.906 12.222-29.81 29.81l1.071 6.084c3.882 22.046-20.287 38.195-39.17 26.172l-5.211-3.318c-15.064-9.592-35.079-1.301-38.948 16.133l-1.338 6.03c-4.85 21.854-33.359 27.524-46.204 9.19l-3.544-5.059c-10.247-14.626-31.911-14.626-42.157 0l-3.544 5.059c-12.844 18.334-41.353 12.663-46.204-9.19l-1.338-6.03c-3.869-17.434-23.884-25.724-38.948-16.133l-5.211 3.318c-18.882 12.023-43.051-4.126-39.17-26.172l1.071-6.084c3.097-17.588-12.222-32.906-29.81-29.81l-6.084 1.071c-22.046 3.882-38.195-20.287-26.172-39.17l3.318-5.211c9.592-15.064 1.301-35.079-16.133-38.948l-6.03-1.338c-21.854-4.85-27.524-33.359-9.19-46.204l5.059-3.544c14.626-10.247 14.626-31.911 0-42.157l-5.059-3.544c-18.334-12.844-12.663-41.353 9.19-46.204l6.03-1.338c17.434-3.869 25.724-23.884 16.133-38.948l-3.318-5.211c-12.023-18.882 4.126-43.051 26.172-39.17l6.084 1.071c17.588 3.097 32.906-12.222 29.81-29.81l-1.071-6.084c-3.882-22.046 20.287-38.195 39.17-26.172l5.211 3.318c15.064 9.592 35.079 1.301 38.948-16.133l1.338-6.03c4.85-21.854 33.359-27.524 46.204-9.19l3.544 5.059c10.246 14.627 31.91 14.627 42.157 0"/><path fill="#FFA1E0" d="m96.128 287.377l-.08-2.719l-.098-3.334c-.012-.672-.058-1.353-.046-2.165l.061-2.626c.071-1.85.079-3.969.233-6.218l.595-7.322c.354-2.625.686-5.462 1.144-8.477l.847-4.641l.447-2.429c.167-.817.375-1.637.567-2.473l1.247-5.141c.473-1.746 1.023-3.517 1.555-5.343l.825-2.767l.972-2.787c.68-1.87 1.279-3.824 2.074-5.744c2.957-7.779 6.89-15.93 11.801-24.259c4.939-8.311 11.004-16.712 18.257-24.867c7.244-8.16 15.767-15.983 25.474-23.128c9.682-7.185 20.719-13.435 32.757-18.554c5.999-2.623 12.327-4.739 18.813-6.706c1.63-.46 3.284-.859 4.937-1.287c1.658-.408 3.311-.884 5.004-1.192c3.374-.675 6.767-1.434 10.233-1.886c1.729-.252 3.462-.539 5.208-.758l5.271-.526l2.652-.259l2.666-.141l5.364-.256l.673-.031h5.934c.424.004.782-.012 1.307.022l2.946.147c4.034.162 7.654.614 11.426 1.059c14.967 2.098 30.014 6.668 44.086 13.887a141.2 141.2 0 0 1 38.229 29.027c11.159 11.939 20.242 26.137 26.641 41.638c6.395 15.493 10.096 32.35 10.454 49.339c.284 8.187-.418 17.681-2.119 26.208a118 118 0 0 1-8.094 25.271c-1.797 4.058-3.896 7.974-6.132 11.804c-1.191 1.869-2.336 3.772-3.596 5.595c-1.285 1.805-2.51 3.657-3.901 5.383c-5.402 7.023-11.56 13.464-18.378 19.101c-13.653 11.224-29.797 19.492-46.905 23.512a118.6 118.6 0 0 1-25.917 3.251l-.812.02l-.406.009c.315.009-.906-.004-.885-.004l-1.352-.032l-2.761-.073l-3.715-.255c-.605-.051-1.266-.087-1.825-.155l-1.678-.206c-4.48-.492-8.898-1.414-13.245-2.518c-4.342-1.143-8.58-2.609-12.708-4.298c-4.092-1.767-8.111-3.688-11.906-5.967c-3.794-2.273-7.453-4.748-10.868-7.5c-1.743-1.332-3.366-2.802-5.012-4.236c-.808-.733-1.585-1.5-2.374-2.251a48 48 0 0 1-2.304-2.311c-3.054-3.098-5.782-6.473-8.379-9.909c-2.533-3.488-4.883-7.09-6.907-10.855a98 98 0 0 1-9.09-23.613c-.446-2.042-.946-4.068-1.257-6.122l-.505-3.068l-.367-3.076c-.283-2.044-.326-4.1-.466-6.14c-.053-1.021-.039-2.04-.057-3.058l-.012-1.525l-.004-.761c-.004-.032.017-1.146.015-.817l.014-.306l.109-2.441l.017-.329l.033-.443l.069-.886l.151-1.768c.056-.574.101-1.209.174-1.729l.219-1.57c.157-1.044.276-2.091.492-3.123c.709-4.151 1.831-8.198 3.161-12.125c5.418-15.74 15.662-28.947 27.989-38.112c12.401-9.136 26.93-14.269 40.968-15.255c1.755-.095 3.5-.202 5.232-.197l2.589.021l1.462.033l.509.047l1.016.094l2.024.187l1.008.093l.511.049l.742.111c1.978.302 3.94.642 5.872 1.016l.723.142l.634.177l1.263.358l2.506.73c1.675.449 3.264 1.121 4.846 1.768c1.58.65 3.158 1.264 4.628 2.092c1.483.793 2.98 1.534 4.394 2.388c5.666 3.432 10.573 7.631 14.731 12.199l2.939 3.537c.948 1.184 1.75 2.471 2.604 3.693l1.242 1.848l1.083 1.929c.701 1.29 1.424 2.55 2.059 3.84c1.124 2.658 2.372 5.198 3.103 7.888c.397 1.33.85 2.626 1.16 3.948l.815 3.953c.121.654.277 1.296.36 1.949l.21 1.953l.375 3.84c.049 1.269.028 2.527.034 3.768l-.009 1.849l-.01.916c.005-.052-.039 1.31-.032.818l-.022.183l-.044.364l-.351 2.882l-.043.356l-.023.183l-.044.256l-.18 1.017l-.382 2.01l-.409 1.973c-.13.676-.336 1.174-.502 1.762l-1.066 3.338c-1.69 4.29-3.643 8.226-6.103 11.53c-1.119 1.722-2.472 3.198-3.712 4.668c-.602.75-1.315 1.386-1.973 2.044l-1.981 1.902c-1.397 1.141-2.751 2.235-4.099 3.224c-1.411.912-2.744 1.82-4.085 2.594c-5.388 3.108-10.501 4.531-14.587 5.325l-2.905.489c-.916.086-1.771.138-2.559.195l-2.17.132c-.66.005-1.259-.034-1.789-.048l-3.202-.137a6.964 6.964 0 0 1-.973-13.806l.972-.178l2.224-.411c.363-.071.771-.124 1.215-.226l1.438-.419l1.668-.465l1.837-.731c2.562-1.052 5.622-2.589 8.593-5.129a30.3 30.3 0 0 0 7.955-10.24c.245-.545.53-1.073.763-1.634l.61-1.739c.1-.292.224-.576.313-.874l.225-.916c.147-.613.333-1.217.471-1.84l.285-1.917c.034-.303.145-.678.124-.923l.012-.785l.044-.778l.034-.388l.01-.097l-.003-.173l-.007-.359l-.059-2.903l-.007-.367l-.004-.184c.012-.614-.019.626-.025.451l-.084-.557l-.158-1.117c-.11-.746-.181-1.5-.306-2.25l-.552-2.236l-.26-1.128c-.094-.375-.259-.735-.382-1.105l-.772-2.221c-.276-.738-.675-1.439-.994-2.167c-.585-1.483-1.536-2.824-2.302-4.255c-.452-.681-.969-1.33-1.438-2.008l-.717-1.011l-.839-.934c-.572-.613-1.065-1.292-1.681-1.874a92 92 0 0 1-1.858-1.742c-2.606-2.197-5.449-4.218-8.644-5.698c-.795-.37-1.641-.642-2.45-.989c-.796-.382-1.673-.571-2.524-.818c-.853-.246-1.692-.539-2.59-.641l-1.318-.254l-.657-.136l-.328-.07l-.261-.009a18 18 0 0 1-2.048-.192l-.254-.041l-.497-.006l-1.012-.009l-2.033-.018l-1.021-.009l-.511-.004c1.572.039.327.021.629.034l-.189.017l-1.516.125c-1.012.081-2.016.251-3.024.384c-4.008.709-7.992 1.803-11.774 3.554c-.961.396-1.87.921-2.81 1.377c-.9.541-1.837 1.014-2.71 1.613c-1.791 1.112-3.491 2.398-5.111 3.789c-1.65 1.355-3.181 2.875-4.619 4.486a41 41 0 0 0-3.961 5.16a40 40 0 0 0-3.18 5.73c-.903 1.997-1.733 4.04-2.338 6.166c-.608 2.122-1.138 4.282-1.405 6.503c-.105.548-.122 1.112-.188 1.668l-.087.836c-.032.283-.017.458-.032.691l-.034.658l-.023.329l-.013.164l-.004.28l-.015 2.443l.187 3.345c.157 1.227.203 2.47.416 3.692l.258 1.843l.356 1.829c.198 1.229.558 2.424.836 3.639c2.611 9.617 7.733 18.769 14.994 26.166c.437.478.904.927 1.383 1.364c.476.44.935.9 1.419 1.332c.998.831 1.952 1.718 3.005 2.489c2.035 1.629 4.227 3.064 6.48 4.396c2.233 1.373 4.617 2.487 7.019 3.561c2.437.995 4.928 1.88 7.488 2.565c2.567.646 5.168 1.232 7.829 1.517l.994.134c.332.046.571.044.86.072a55 55 0 0 1 1.665.154l2.639.08l1.351.037c.232.007-.75-.011-.209-.008l.27-.008l.54-.015a78.7 78.7 0 0 0 17.165-2.079c11.276-2.613 22.025-7.872 31.222-15.248c9.145-7.425 16.714-16.937 21.75-27.66a79.4 79.4 0 0 0 5.763-16.779c1.252-5.958 1.826-11.267 1.777-17.81c-.048-6.243-.586-12.467-1.722-18.568a104 104 0 0 0-5.013-17.859c-4.388-11.551-10.839-22.255-18.826-31.5c-8.011-9.231-17.56-16.954-27.946-22.84c-10.384-5.912-21.636-9.875-33.025-11.995c-2.839-.452-5.799-.947-8.359-1.159l-1.984-.228c-.294-.048-.759-.056-1.157-.08l-1.23-.062l-2.455-.124l-1.225-.062l-.306-.015c-.454-.009.273-.007.1-.006h-.55l-4.389-.009l-2.187-.002l-2.174.108l-4.334.204c-1.436.108-2.862.278-4.289.41c-2.862.212-5.662.713-8.463 1.116c-1.407.172-2.776.508-4.155.772l-4.117.834c-5.417 1.32-10.752 2.74-15.839 4.632c-10.213 3.659-19.727 8.334-28.271 13.816c-17.134 10.948-30.502 24.642-40.132 38.314c-4.837 6.834-8.866 13.633-12.013 20.218c-.843 1.622-1.496 3.286-2.234 4.877l-1.063 2.376l-.923 2.37c-.599 1.566-1.22 3.088-1.767 4.593l-1.476 4.448c-.24.723-.501 1.431-.719 2.14l-.601 2.11l-1.158 4.047c-.665 2.639-1.204 5.137-1.758 7.457l-1.171 6.508c-.333 1.984-.5 3.739-.728 5.343l-.31 2.257c-.094.714-.127 1.462-.187 2.111l-.267 3.325l-.217 2.712a7 7 0 0 1-7.54 6.42c-3.585-.286-6.322-3.262-6.439-6.773"/></svg>';
    // 正常的钩子，来自 Github
    const img4 = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="#1a7f37" style="margin-bottom: -3px;"><path d="m9.585.52.929.68c.153.112.331.186.518.215l1.138.175a2.678 2.678 0 0 1 2.24 2.24l.174 1.139c.029.187.103.365.215.518l.68.928a2.677 2.677 0 0 1 0 3.17l-.68.928a1.174 1.174 0 0 0-.215.518l-.175 1.138a2.678 2.678 0 0 1-2.241 2.241l-1.138.175a1.17 1.17 0 0 0-.518.215l-.928.68a2.677 2.677 0 0 1-3.17 0l-.928-.68a1.174 1.174 0 0 0-.518-.215L3.83 14.41a2.678 2.678 0 0 1-2.24-2.24l-.175-1.138a1.17 1.17 0 0 0-.215-.518l-.68-.928a2.677 2.677 0 0 1 0-3.17l.68-.928c.112-.153.186-.331.215-.518l.175-1.14a2.678 2.678 0 0 1 2.24-2.24l1.139-.175c.187-.029.365-.103.518-.215l.928-.68a2.677 2.677 0 0 1 3.17 0ZM7.303 1.728l-.927.68a2.67 2.67 0 0 1-1.18.489l-1.137.174a1.179 1.179 0 0 0-.987.987l-.174 1.136a2.677 2.677 0 0 1-.489 1.18l-.68.928a1.18 1.18 0 0 0 0 1.394l.68.927c.256.348.424.753.489 1.18l.174 1.137c.078.509.478.909.987.987l1.136.174a2.67 2.67 0 0 1 1.18.489l.928.68c.414.305.979.305 1.394 0l.927-.68a2.67 2.67 0 0 1 1.18-.489l1.137-.174a1.18 1.18 0 0 0 .987-.987l.174-1.136a2.67 2.67 0 0 1 .489-1.18l.68-.928a1.176 1.176 0 0 0 0-1.394l-.68-.927a2.686 2.686 0 0 1-.489-1.18l-.174-1.137a1.179 1.179 0 0 0-.987-.987l-1.136-.174a2.677 2.677 0 0 1-1.18-.489l-.928-.68a1.176 1.176 0 0 0-1.394 0ZM11.28 6.78l-3.75 3.75a.75.75 0 0 1-1.06 0L4.72 8.78a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L7 8.94l3.22-3.22a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042Z"></path></svg>';

    // 在此修改数字即可
    // 设置 TODO
    const img = img4;
    const foundElements = new Set();

    function checkForInner(targetClass) {
        const elements = document.getElementsByClassName(targetClass);
        for (const element of elements) {
            if (!foundElements.has(element)) {
                foundElements.add(element);
                element.innerHTML = img;
            }
        }
    }

    function checkForOuter(targetClass) {
        const elements = document.getElementsByClassName(targetClass);
        for (const element of elements) {
            if (!foundElements.has(element)) {
                foundElements.add(element);
                element.outerHTML = img;
            }
        }
    }

    function checkForNewElements() {
        checkForInner('sb_amazeui');
        checkForOuter('fa-badge-check');

        requestAnimationFrame(checkForNewElements);
    }

    requestAnimationFrame(checkForNewElements);

})();

