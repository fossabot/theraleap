(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{107:function(module,__webpack_exports__,__webpack_require__){"use strict";eval('/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return project; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return project3; });\n/**\n * Project a value from one number range onto another one.\n * Establishes a proportion between the two number ranges and returns the proportion\n * applied to the new range.\n * @param value value to be projected\n * @param min minimum value of the input value\n * @param max maximum value of the input value\n * @param targetMin minimum value of the projected plane\n * @param targetMax maximum value of the projected plane\n */\nfunction project(value, min, max, targetMin, targetMax) {\n    return targetMin + (targetMax - targetMin) * ((value - min) / (max - min));\n}\n/**\n * Project a 3 Dimensional Vector from one plane into another one, as described\n * by the from / to projection matrices.\n * @param vector3 The Vector to be projected into a new plane\n * @param projection  The Projection Matrix\n */\nfunction project3(vector3, projection) {\n    const projected = [];\n    for (const i in [0, 1, 2]) {\n        projected.push(project(vector3[i], projection.projectionFrom.min[i], projection.projectionFrom.max[i], projection.projectionTo.min[i], projection.projectionTo.max[i]));\n    }\n    return projected;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTA3LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3VpL2dyYXBoaWNzL3V0aWwudHM/NjFjNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcm9qZWN0aW9uMyB9IGZyb20gXCIuL3R5cGVzXCI7XG5cbi8qKlxuICogUHJvamVjdCBhIHZhbHVlIGZyb20gb25lIG51bWJlciByYW5nZSBvbnRvIGFub3RoZXIgb25lLlxuICogRXN0YWJsaXNoZXMgYSBwcm9wb3J0aW9uIGJldHdlZW4gdGhlIHR3byBudW1iZXIgcmFuZ2VzIGFuZCByZXR1cm5zIHRoZSBwcm9wb3J0aW9uXG4gKiBhcHBsaWVkIHRvIHRoZSBuZXcgcmFuZ2UuXG4gKiBAcGFyYW0gdmFsdWUgdmFsdWUgdG8gYmUgcHJvamVjdGVkXG4gKiBAcGFyYW0gbWluIG1pbmltdW0gdmFsdWUgb2YgdGhlIGlucHV0IHZhbHVlXG4gKiBAcGFyYW0gbWF4IG1heGltdW0gdmFsdWUgb2YgdGhlIGlucHV0IHZhbHVlXG4gKiBAcGFyYW0gdGFyZ2V0TWluIG1pbmltdW0gdmFsdWUgb2YgdGhlIHByb2plY3RlZCBwbGFuZVxuICogQHBhcmFtIHRhcmdldE1heCBtYXhpbXVtIHZhbHVlIG9mIHRoZSBwcm9qZWN0ZWQgcGxhbmVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHByb2plY3QoXG4gIHZhbHVlOiBudW1iZXIsXG4gIG1pbjogbnVtYmVyLFxuICBtYXg6IG51bWJlcixcbiAgdGFyZ2V0TWluOiBudW1iZXIsXG4gIHRhcmdldE1heDogbnVtYmVyXG4pOiBudW1iZXIge1xuICByZXR1cm4gdGFyZ2V0TWluICsgKHRhcmdldE1heCAtIHRhcmdldE1pbikgKiAoKHZhbHVlIC0gbWluKSAvIChtYXggLSBtaW4pKTtcbn1cblxuLyoqXG4gKiBQcm9qZWN0IGEgMyBEaW1lbnNpb25hbCBWZWN0b3IgZnJvbSBvbmUgcGxhbmUgaW50byBhbm90aGVyIG9uZSwgYXMgZGVzY3JpYmVkXG4gKiBieSB0aGUgZnJvbSAvIHRvIHByb2plY3Rpb24gbWF0cmljZXMuXG4gKiBAcGFyYW0gdmVjdG9yMyBUaGUgVmVjdG9yIHRvIGJlIHByb2plY3RlZCBpbnRvIGEgbmV3IHBsYW5lXG4gKiBAcGFyYW0gcHJvamVjdGlvbiAgVGhlIFByb2plY3Rpb24gTWF0cml4XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwcm9qZWN0MyhcbiAgdmVjdG9yMzogbnVtYmVyW10sXG4gIHByb2plY3Rpb246IHsgcHJvamVjdGlvbkZyb206IFByb2plY3Rpb24zOyBwcm9qZWN0aW9uVG86IFByb2plY3Rpb24zIH1cbik6IG51bWJlcltdIHtcbiAgY29uc3QgcHJvamVjdGVkID0gW107XG4gIGZvciAoY29uc3QgaSBpbiBbMCwgMSwgMl0pIHtcbiAgICBwcm9qZWN0ZWQucHVzaChcbiAgICAgIHByb2plY3QoXG4gICAgICAgIHZlY3RvcjNbaV0sXG4gICAgICAgIHByb2plY3Rpb24ucHJvamVjdGlvbkZyb20ubWluW2ldLFxuICAgICAgICBwcm9qZWN0aW9uLnByb2plY3Rpb25Gcm9tLm1heFtpXSxcbiAgICAgICAgcHJvamVjdGlvbi5wcm9qZWN0aW9uVG8ubWluW2ldLFxuICAgICAgICBwcm9qZWN0aW9uLnByb2plY3Rpb25Uby5tYXhbaV1cbiAgICAgIClcbiAgICApO1xuICB9XG4gIHJldHVybiBwcm9qZWN0ZWQ7XG59XG4iXSwibWFwcGluZ3MiOiJBQUVBO0FBQUE7QUFBQTs7Ozs7Ozs7O0FBU0E7QUFDQTtBQU9BO0FBQ0E7QUFFQTs7Ozs7QUFLQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBU0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///107\n')},181:function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n\n// EXTERNAL MODULE: ./src/ui/graphics/util.ts\nvar util = __webpack_require__(107);\n\n// CONCATENATED MODULE: ./src/games/space-shooter/draw.ts\nconst drawScene = (ctx) => {\n    ctx.background(0);\n    ctx.fill(255);\n};\nconst drawSpaceShip = (x, y, ctx) => {\n    ctx.triangle(x, y - 40, x - 15, y, x + 15, y);\n};\nconst drawBullets = (bullets, ctx) => {\n    bullets.forEach(b => {\n        ctx.ellipse(b.x, b.y - 15, 5);\n    });\n};\nconst polygon = (x, y, radius, n, ctx) => {\n    const angle = Math.PI * 2 / n;\n    ctx.beginShape();\n    for (let a = 0; a < Math.PI * 2; a += angle) {\n        const sx = x + ctx.cos(a) * radius;\n        const sy = y + ctx.sin(a) * radius;\n        ctx.vertex(sx, sy);\n    }\n    ctx.endShape(ctx.CLOSE);\n};\nconst drawSpaceRocks = (rocks, ctx) => {\n    rocks.forEach(rock => {\n        polygon(rock.x, rock.y, 50, rock.edges, ctx);\n    });\n};\nconst drawScore = (score, ctx) => {\n    ctx.textFont("Courier New", 40);\n    ctx.text(score.toString().padStart(5, "0"), 20, 50);\n};\n\n// CONCATENATED MODULE: ./src/games/space-shooter/logic.ts\nconst tickBullets = (b, ctx) => {\n    const newBullets = [];\n    b.forEach(bullet => {\n        if (bullet.x < ctx.width &&\n            bullet.x > 0 &&\n            bullet.y < ctx.height &&\n            bullet.y > 0) {\n            const newBullet = {\n                speed: bullet.speed,\n                x: bullet.x,\n                y: bullet.y - bullet.speed\n            };\n            newBullets.push(newBullet);\n        }\n    });\n    return newBullets;\n};\nconst shootBullet = (bullets, x, y, speed) => {\n    bullets.push({ x, y, speed });\n};\nconst randomIntInRange = (min, max) => {\n    min = Math.ceil(min);\n    max = Math.floor(max);\n    return Math.floor(Math.random() * (max - min)) + min;\n};\nconst createNewRock = (ctx) => {\n    return {\n        edges: randomIntInRange(3, 10),\n        speedX: randomIntInRange(-2, 2),\n        speedY: randomIntInRange(2, 6),\n        x: randomIntInRange(0, ctx.width),\n        y: -50\n    };\n};\nconst tickSpaceRocks = (s, ctx) => {\n    const newRocks = [];\n    if (Math.random() > 0.985) {\n        const rock = createNewRock(ctx);\n        newRocks.push(rock);\n    }\n    s.forEach(rock => {\n        if (rock.x > -50 &&\n            rock.x < ctx.width + 50 &&\n            rock.y > -100 &&\n            rock.y < ctx.height + 100) {\n            newRocks.push({\n                edges: rock.edges,\n                speedX: rock.speedX,\n                speedY: rock.speedY + randomIntInRange(0, 1),\n                x: rock.x + rock.speedX,\n                y: rock.y + rock.speedY\n            });\n        }\n    });\n    return newRocks;\n};\nconst processBulletCollision = (b, r, ctx) => {\n    let hit = [];\n    let collisionOccured = false;\n    b.forEach((bullet, bIdx) => {\n        r.forEach((rock, rIdx) => {\n            if (Math.abs(bullet.x - rock.x) < 50 &&\n                Math.abs(bullet.y - rock.y) < 30) {\n                hit = [bIdx, rIdx];\n            }\n        });\n    });\n    if (hit.length !== 0) {\n        b.splice(hit[0], 1);\n        r.splice(hit[1], 1);\n        collisionOccured = true;\n    }\n    return collisionOccured;\n};\nconst processSpaceShipCollision = (shipX, shipY, spaceRocks) => {\n    let collision = false;\n    spaceRocks.forEach(rock => {\n        if (Math.abs(rock.x - shipX) < 35 && Math.abs(rock.y - shipY) < 35) {\n            collision = true;\n            return;\n        }\n    });\n    return collision;\n};\nconst updateScore = (oldScore) => {\n    return oldScore + 20;\n};\n\n// CONCATENATED MODULE: ./src/games/space-shooter/index.ts\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return space_shooter_SpaceShooterGame; });\nconst p5 = __webpack_require__(136);\n\n\n\nclass space_shooter_SpaceShooterGame {\n    constructor() {\n        this.x = 0;\n        this.y = 0;\n        this.score = 0;\n        this.gameOver = false;\n        this.paused = false;\n        this.bullets = [];\n        this.spaceRocks = [];\n    }\n    async onStart(config, notifyGameOver) {\n        this.width = config.element.clientWidth;\n        this.height = config.element.clientHeight;\n        this.x = config.element.clientWidth / 2;\n        this.y = config.element.clientHeight - 50;\n        this.iP5 = new p5((s) => {\n            s.setup = () => {\n                s.createCanvas(config.element.clientWidth, config.element.clientHeight);\n            };\n            s.draw = () => {\n                if (this.paused) {\n                    return;\n                }\n                this.bullets = tickBullets(this.bullets, s);\n                this.spaceRocks = tickSpaceRocks(this.spaceRocks, s);\n                const bulletCollissionOccurred = processBulletCollision(this.bullets, this.spaceRocks, s);\n                if (bulletCollissionOccurred) {\n                    this.score = updateScore(this.score);\n                }\n                this.gameOver = processSpaceShipCollision(this.x, this.y, this.spaceRocks);\n                if (this.gameOver) {\n                    notifyGameOver();\n                    s.remove();\n                }\n                else {\n                    drawScene(s);\n                    drawScore(this.score, s);\n                    drawSpaceShip(this.x, this.y, s);\n                    drawSpaceRocks(this.spaceRocks, s);\n                    drawBullets(this.bullets, s);\n                }\n            };\n        }, config.element);\n    }\n    async onStop(vm) {\n        vm.$router.push({\n            name: "game-over",\n            params: {\n                gameIdentifier: "space-shooter",\n                score: this.score,\n                statistics: [12, 23, 23]\n            }\n        });\n    }\n    async onPause() {\n        this.paused = true;\n    }\n    async onResume() {\n        this.paused = false;\n    }\n    onClassificationReceived(c) {\n        shootBullet(this.bullets, this.x, this.y, 5);\n    }\n    onMotionTrackingDataReceived(m) {\n        const leap = m.data;\n        const iBox = leap.interactionBox;\n        if (leap.hands && leap.hands.length >= 1) {\n            this.x = Object(util["a" /* project */])(leap.hands[0].palmPosition[0], iBox.center[0] - iBox.size[0] / 2, iBox.center[0] + iBox.size[0] / 2, 0, this.width);\n            this.y = Object(util["a" /* project */])(leap.hands[0].palmPosition[2], iBox.center[2] - iBox.size[2] / 2, iBox.center[2] + iBox.size[2] / 2, this.height - this.height / 4, this.height - 100);\n        }\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTgxLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWVzL3NwYWNlLXNob290ZXIvZHJhdy50cz9hN2Q5Iiwid2VicGFjazovLy8uL3NyYy9nYW1lcy9zcGFjZS1zaG9vdGVyL2xvZ2ljLnRzPzBmMmUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWVzL3NwYWNlLXNob290ZXIvaW5kZXgudHM/OTZkMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCdWxsZXQsIFNwYWNlUm9jayB9IGZyb20gXCIuL3R5cGVzXCI7XG5cbmV4cG9ydCBjb25zdCBkcmF3U2NlbmUgPSAoY3R4OiBwNSkgPT4ge1xuICBjdHguYmFja2dyb3VuZCgwKTtcbiAgY3R4LmZpbGwoMjU1KTtcbn07XG5cbmV4cG9ydCBjb25zdCBkcmF3U3BhY2VTaGlwID0gKHg6IG51bWJlciwgeTogbnVtYmVyLCBjdHg6IHA1KSA9PiB7XG4gIGN0eC50cmlhbmdsZSh4LCB5IC0gNDAsIHggLSAxNSwgeSwgeCArIDE1LCB5KTtcbn07XG5cbmV4cG9ydCBjb25zdCBkcmF3QnVsbGV0cyA9IChidWxsZXRzOiBCdWxsZXRbXSwgY3R4OiBwNSkgPT4ge1xuICBidWxsZXRzLmZvckVhY2goYiA9PiB7XG4gICAgY3R4LmVsbGlwc2UoYi54LCBiLnkgLSAxNSwgNSk7XG4gIH0pO1xufTtcblxuY29uc3QgcG9seWdvbiA9ICh4OiBudW1iZXIsIHk6IG51bWJlciwgcmFkaXVzOiBudW1iZXIsIG46IG51bWJlciwgY3R4OiBwNSkgPT4ge1xuICBjb25zdCBhbmdsZSA9IE1hdGguUEkgKiAyIC8gbjtcbiAgY3R4LmJlZ2luU2hhcGUoKTtcbiAgZm9yIChsZXQgYSA9IDA7IGEgPCBNYXRoLlBJICogMjsgYSArPSBhbmdsZSkge1xuICAgIGNvbnN0IHN4ID0geCArIGN0eC5jb3MoYSkgKiByYWRpdXM7XG4gICAgY29uc3Qgc3kgPSB5ICsgY3R4LnNpbihhKSAqIHJhZGl1cztcbiAgICBjdHgudmVydGV4KHN4LCBzeSk7XG4gIH1cbiAgY3R4LmVuZFNoYXBlKGN0eC5DTE9TRSk7XG59O1xuXG5leHBvcnQgY29uc3QgZHJhd1NwYWNlUm9ja3MgPSAocm9ja3M6IFNwYWNlUm9ja1tdLCBjdHg6IHA1KSA9PiB7XG4gIHJvY2tzLmZvckVhY2gocm9jayA9PiB7XG4gICAgcG9seWdvbihyb2NrLngsIHJvY2sueSwgNTAsIHJvY2suZWRnZXMsIGN0eCk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGRyYXdTY29yZSA9IChzY29yZTogbnVtYmVyLCBjdHg6IHA1KSA9PiB7XG4gIGN0eC50ZXh0Rm9udChcIkNvdXJpZXIgTmV3XCIsIDQwKTtcbiAgY3R4LnRleHQoc2NvcmUudG9TdHJpbmcoKS5wYWRTdGFydCg1LCBcIjBcIiksIDIwLCA1MCk7XG59O1xuIiwiaW1wb3J0IHsgQnVsbGV0LCBTcGFjZVJvY2sgfSBmcm9tIFwiLi90eXBlc1wiO1xuXG5leHBvcnQgY29uc3QgdGlja0J1bGxldHMgPSAoYjogQnVsbGV0W10sIGN0eDogcDUpID0+IHtcbiAgY29uc3QgbmV3QnVsbGV0czogQnVsbGV0W10gPSBbXTtcbiAgYi5mb3JFYWNoKGJ1bGxldCA9PiB7XG4gICAgaWYgKFxuICAgICAgYnVsbGV0LnggPCBjdHgud2lkdGggJiZcbiAgICAgIGJ1bGxldC54ID4gMCAmJlxuICAgICAgYnVsbGV0LnkgPCBjdHguaGVpZ2h0ICYmXG4gICAgICBidWxsZXQueSA+IDBcbiAgICApIHtcbiAgICAgIGNvbnN0IG5ld0J1bGxldCA9IHtcbiAgICAgICAgc3BlZWQ6IGJ1bGxldC5zcGVlZCxcbiAgICAgICAgeDogYnVsbGV0LngsXG4gICAgICAgIHk6IGJ1bGxldC55IC0gYnVsbGV0LnNwZWVkXG4gICAgICB9O1xuICAgICAgbmV3QnVsbGV0cy5wdXNoKG5ld0J1bGxldCk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIG5ld0J1bGxldHM7XG59O1xuXG5leHBvcnQgY29uc3Qgc2hvb3RCdWxsZXQgPSAoXG4gIGJ1bGxldHM6IEJ1bGxldFtdLFxuICB4OiBudW1iZXIsXG4gIHk6IG51bWJlcixcbiAgc3BlZWQ6IG51bWJlclxuKSA9PiB7XG4gIGJ1bGxldHMucHVzaCh7IHgsIHksIHNwZWVkIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IHJhbmRvbUludEluUmFuZ2UgPSAobWluOiBudW1iZXIsIG1heDogbnVtYmVyKSA9PiB7XG4gIG1pbiA9IE1hdGguY2VpbChtaW4pO1xuICBtYXggPSBNYXRoLmZsb29yKG1heCk7XG4gIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSkgKyBtaW47XG59O1xuXG5leHBvcnQgY29uc3QgY3JlYXRlTmV3Um9jayA9IChjdHg6IHA1KTogU3BhY2VSb2NrID0+IHtcbiAgcmV0dXJuIHtcbiAgICBlZGdlczogcmFuZG9tSW50SW5SYW5nZSgzLCAxMCksXG4gICAgc3BlZWRYOiByYW5kb21JbnRJblJhbmdlKC0yLCAyKSxcbiAgICBzcGVlZFk6IHJhbmRvbUludEluUmFuZ2UoMiwgNiksXG4gICAgeDogcmFuZG9tSW50SW5SYW5nZSgwLCBjdHgud2lkdGgpLFxuICAgIHk6IC01MFxuICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IHRpY2tTcGFjZVJvY2tzID0gKHM6IFNwYWNlUm9ja1tdLCBjdHg6IHA1KSA9PiB7XG4gIGNvbnN0IG5ld1JvY2tzOiBTcGFjZVJvY2tbXSA9IFtdO1xuICBpZiAoTWF0aC5yYW5kb20oKSA+IDAuOTg1KSB7XG4gICAgY29uc3Qgcm9jayA9IGNyZWF0ZU5ld1JvY2soY3R4KTtcbiAgICBuZXdSb2Nrcy5wdXNoKHJvY2spO1xuICB9XG4gIHMuZm9yRWFjaChyb2NrID0+IHtcbiAgICBpZiAoXG4gICAgICByb2NrLnggPiAtNTAgJiZcbiAgICAgIHJvY2sueCA8IGN0eC53aWR0aCArIDUwICYmXG4gICAgICByb2NrLnkgPiAtMTAwICYmXG4gICAgICByb2NrLnkgPCBjdHguaGVpZ2h0ICsgMTAwXG4gICAgKSB7XG4gICAgICBuZXdSb2Nrcy5wdXNoKHtcbiAgICAgICAgZWRnZXM6IHJvY2suZWRnZXMsXG4gICAgICAgIHNwZWVkWDogcm9jay5zcGVlZFgsXG4gICAgICAgIHNwZWVkWTogcm9jay5zcGVlZFkgKyByYW5kb21JbnRJblJhbmdlKDAsIDEpLFxuICAgICAgICB4OiByb2NrLnggKyByb2NrLnNwZWVkWCxcbiAgICAgICAgeTogcm9jay55ICsgcm9jay5zcGVlZFlcbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBuZXdSb2Nrcztcbn07XG5cbmV4cG9ydCBjb25zdCBwcm9jZXNzQnVsbGV0Q29sbGlzaW9uID0gKFxuICBiOiBCdWxsZXRbXSxcbiAgcjogU3BhY2VSb2NrW10sXG4gIGN0eDogcDVcbikgPT4ge1xuICBsZXQgaGl0OiBudW1iZXJbXSA9IFtdO1xuICBsZXQgY29sbGlzaW9uT2NjdXJlZCA9IGZhbHNlO1xuICBiLmZvckVhY2goKGJ1bGxldCwgYklkeCkgPT4ge1xuICAgIHIuZm9yRWFjaCgocm9jaywgcklkeCkgPT4ge1xuICAgICAgaWYgKFxuICAgICAgICBNYXRoLmFicyhidWxsZXQueCAtIHJvY2sueCkgPCA1MCAmJlxuICAgICAgICBNYXRoLmFicyhidWxsZXQueSAtIHJvY2sueSkgPCAzMFxuICAgICAgKSB7XG4gICAgICAgIGhpdCA9IFtiSWR4LCBySWR4XTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG4gIGlmIChoaXQubGVuZ3RoICE9PSAwKSB7XG4gICAgYi5zcGxpY2UoaGl0WzBdLCAxKTtcbiAgICByLnNwbGljZShoaXRbMV0sIDEpO1xuICAgIGNvbGxpc2lvbk9jY3VyZWQgPSB0cnVlO1xuICB9XG4gIHJldHVybiBjb2xsaXNpb25PY2N1cmVkO1xufTtcblxuZXhwb3J0IGNvbnN0IHByb2Nlc3NTcGFjZVNoaXBDb2xsaXNpb24gPSAoXG4gIHNoaXBYOiBudW1iZXIsXG4gIHNoaXBZOiBudW1iZXIsXG4gIHNwYWNlUm9ja3M6IFNwYWNlUm9ja1tdXG4pID0+IHtcbiAgbGV0IGNvbGxpc2lvbiA9IGZhbHNlO1xuICBzcGFjZVJvY2tzLmZvckVhY2gocm9jayA9PiB7XG4gICAgaWYgKE1hdGguYWJzKHJvY2sueCAtIHNoaXBYKSA8IDM1ICYmIE1hdGguYWJzKHJvY2sueSAtIHNoaXBZKSA8IDM1KSB7XG4gICAgICBjb2xsaXNpb24gPSB0cnVlO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBjb2xsaXNpb247XG59O1xuXG5leHBvcnQgY29uc3QgdXBkYXRlU2NvcmUgPSAob2xkU2NvcmU6IG51bWJlcikgPT4ge1xuICByZXR1cm4gb2xkU2NvcmUgKyAyMDtcbn07XG4iLCJjb25zdCBwNSA9IHJlcXVpcmUoXCJwNS9saWIvcDUubWluXCIpIGFzIGFueTtcblxuaW1wb3J0IHsgQ2xhc3NpZmljYXRpb25EYXRhIH0gZnJvbSBcIkAvY2xhc3NpZnlcIjtcbmltcG9ydCB7IEdlbmVyaWNIYW5kVHJhY2tpbmdEYXRhIH0gZnJvbSBcIkAvZGV2aWNlc1wiO1xuaW1wb3J0IHsgTGVhcERldmljZUZyYW1lIH0gZnJvbSBcIkAvZGV2aWNlcy9sZWFwbW90aW9uXCI7XG5pbXBvcnQgeyBHYW1lLCBHYW1lQ29uZmlndXJhdGlvbiB9IGZyb20gXCJAL2dhbWVzL3R5cGVzXCI7XG5pbXBvcnQgeyBwcm9qZWN0IH0gZnJvbSBcIkAvdWkvZ3JhcGhpY3MvdXRpbFwiO1xuXG5pbXBvcnQgVnVlIGZyb20gXCJ2dWVcIjtcbmltcG9ydCB7XG4gIGRyYXdCdWxsZXRzLFxuICBkcmF3U2NlbmUsXG4gIGRyYXdTY29yZSxcbiAgZHJhd1NwYWNlUm9ja3MsXG4gIGRyYXdTcGFjZVNoaXBcbn0gZnJvbSBcIi4vZHJhd1wiO1xuaW1wb3J0IHtcbiAgcHJvY2Vzc0J1bGxldENvbGxpc2lvbixcbiAgcHJvY2Vzc1NwYWNlU2hpcENvbGxpc2lvbixcbiAgc2hvb3RCdWxsZXQsXG4gIHRpY2tCdWxsZXRzLFxuICB0aWNrU3BhY2VSb2NrcyxcbiAgdXBkYXRlU2NvcmVcbn0gZnJvbSBcIi4vbG9naWNcIjtcbmltcG9ydCB7IEJ1bGxldCwgU3BhY2VSb2NrIH0gZnJvbSBcIi4vdHlwZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3BhY2VTaG9vdGVyR2FtZSBpbXBsZW1lbnRzIEdhbWUge1xuICBwdWJsaWMgaVA1OiBwNSB8IHVuZGVmaW5lZDtcblxuICBwcml2YXRlIHdpZHRoITogbnVtYmVyO1xuICBwcml2YXRlIGhlaWdodCE6IG51bWJlcjtcblxuICBwcml2YXRlIHg6IG51bWJlciA9IDA7XG4gIHByaXZhdGUgeTogbnVtYmVyID0gMDtcblxuICBwcml2YXRlIHNjb3JlOiBudW1iZXIgPSAwO1xuICBwcml2YXRlIGdhbWVPdmVyOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgcGF1c2VkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgcHJpdmF0ZSBidWxsZXRzOiBCdWxsZXRbXSA9IFtdO1xuICBwcml2YXRlIHNwYWNlUm9ja3M6IFNwYWNlUm9ja1tdID0gW107XG5cbiAgcHVibGljIGFzeW5jIG9uU3RhcnQoY29uZmlnOiBHYW1lQ29uZmlndXJhdGlvbiwgbm90aWZ5R2FtZU92ZXI6ICgpID0+IHZvaWQpIHtcbiAgICB0aGlzLndpZHRoID0gY29uZmlnLmVsZW1lbnQuY2xpZW50V2lkdGg7XG4gICAgdGhpcy5oZWlnaHQgPSBjb25maWcuZWxlbWVudC5jbGllbnRIZWlnaHQ7XG4gICAgdGhpcy54ID0gY29uZmlnLmVsZW1lbnQuY2xpZW50V2lkdGggLyAyO1xuICAgIHRoaXMueSA9IGNvbmZpZy5lbGVtZW50LmNsaWVudEhlaWdodCAtIDUwO1xuICAgIHRoaXMuaVA1ID0gbmV3IHA1KChzOiBwNSkgPT4ge1xuICAgICAgcy5zZXR1cCA9ICgpID0+IHtcbiAgICAgICAgcy5jcmVhdGVDYW52YXMoY29uZmlnLmVsZW1lbnQuY2xpZW50V2lkdGgsIGNvbmZpZy5lbGVtZW50LmNsaWVudEhlaWdodCk7XG4gICAgICB9O1xuXG4gICAgICBzLmRyYXcgPSAoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLnBhdXNlZCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmJ1bGxldHMgPSB0aWNrQnVsbGV0cyh0aGlzLmJ1bGxldHMsIHMpO1xuICAgICAgICB0aGlzLnNwYWNlUm9ja3MgPSB0aWNrU3BhY2VSb2Nrcyh0aGlzLnNwYWNlUm9ja3MsIHMpO1xuICAgICAgICBjb25zdCBidWxsZXRDb2xsaXNzaW9uT2NjdXJyZWQgPSBwcm9jZXNzQnVsbGV0Q29sbGlzaW9uKFxuICAgICAgICAgIHRoaXMuYnVsbGV0cyxcbiAgICAgICAgICB0aGlzLnNwYWNlUm9ja3MsXG4gICAgICAgICAgc1xuICAgICAgICApO1xuICAgICAgICBpZiAoYnVsbGV0Q29sbGlzc2lvbk9jY3VycmVkKSB7XG4gICAgICAgICAgdGhpcy5zY29yZSA9IHVwZGF0ZVNjb3JlKHRoaXMuc2NvcmUpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZ2FtZU92ZXIgPSBwcm9jZXNzU3BhY2VTaGlwQ29sbGlzaW9uKFxuICAgICAgICAgIHRoaXMueCxcbiAgICAgICAgICB0aGlzLnksXG4gICAgICAgICAgdGhpcy5zcGFjZVJvY2tzXG4gICAgICAgICk7XG4gICAgICAgIGlmICh0aGlzLmdhbWVPdmVyKSB7XG4gICAgICAgICAgbm90aWZ5R2FtZU92ZXIoKTtcbiAgICAgICAgICBzLnJlbW92ZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRyYXdTY2VuZShzKTtcbiAgICAgICAgICBkcmF3U2NvcmUodGhpcy5zY29yZSwgcyk7XG4gICAgICAgICAgZHJhd1NwYWNlU2hpcCh0aGlzLngsIHRoaXMueSwgcyk7XG4gICAgICAgICAgZHJhd1NwYWNlUm9ja3ModGhpcy5zcGFjZVJvY2tzLCBzKTtcbiAgICAgICAgICBkcmF3QnVsbGV0cyh0aGlzLmJ1bGxldHMsIHMpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH0sIGNvbmZpZy5lbGVtZW50KTtcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBvblN0b3Aodm06IFZ1ZSkge1xuICAgIHZtLiRyb3V0ZXIucHVzaCh7XG4gICAgICBuYW1lOiBcImdhbWUtb3ZlclwiLFxuICAgICAgcGFyYW1zOiB7XG4gICAgICAgIGdhbWVJZGVudGlmaWVyOiBcInNwYWNlLXNob290ZXJcIixcbiAgICAgICAgc2NvcmU6IHRoaXMuc2NvcmUsXG4gICAgICAgIHN0YXRpc3RpY3M6IFsxMiwgMjMsIDIzXVxuICAgICAgfSBhcyBhbnlcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBvblBhdXNlKCkge1xuICAgIHRoaXMucGF1c2VkID0gdHJ1ZTtcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBvblJlc3VtZSgpIHtcbiAgICB0aGlzLnBhdXNlZCA9IGZhbHNlO1xuICB9XG5cbiAgcHVibGljIG9uQ2xhc3NpZmljYXRpb25SZWNlaXZlZChjOiBDbGFzc2lmaWNhdGlvbkRhdGEpIHtcbiAgICBzaG9vdEJ1bGxldCh0aGlzLmJ1bGxldHMsIHRoaXMueCwgdGhpcy55LCA1KTtcbiAgfVxuXG4gIHB1YmxpYyBvbk1vdGlvblRyYWNraW5nRGF0YVJlY2VpdmVkKG06IEdlbmVyaWNIYW5kVHJhY2tpbmdEYXRhKSB7XG4gICAgY29uc3QgbGVhcCA9IG0uZGF0YSBhcyBMZWFwRGV2aWNlRnJhbWU7XG4gICAgY29uc3QgaUJveCA9IGxlYXAuaW50ZXJhY3Rpb25Cb3g7XG4gICAgaWYgKGxlYXAuaGFuZHMgJiYgbGVhcC5oYW5kcy5sZW5ndGggPj0gMSkge1xuICAgICAgdGhpcy54ID0gcHJvamVjdChcbiAgICAgICAgbGVhcC5oYW5kc1swXS5wYWxtUG9zaXRpb25bMF0sXG4gICAgICAgIGlCb3guY2VudGVyWzBdIC0gaUJveC5zaXplWzBdIC8gMixcbiAgICAgICAgaUJveC5jZW50ZXJbMF0gKyBpQm94LnNpemVbMF0gLyAyLFxuICAgICAgICAwLFxuICAgICAgICB0aGlzLndpZHRoXG4gICAgICApO1xuICAgICAgdGhpcy55ID0gcHJvamVjdChcbiAgICAgICAgbGVhcC5oYW5kc1swXS5wYWxtUG9zaXRpb25bMl0sXG4gICAgICAgIGlCb3guY2VudGVyWzJdIC0gaUJveC5zaXplWzJdIC8gMixcbiAgICAgICAgaUJveC5jZW50ZXJbMl0gKyBpQm94LnNpemVbMl0gLyAyLFxuICAgICAgICB0aGlzLmhlaWdodCAtIHRoaXMuaGVpZ2h0IC8gNCxcbiAgICAgICAgdGhpcy5oZWlnaHQgLSAxMDBcbiAgICAgICk7XG4gICAgfVxuICB9XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUNuQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBTUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7QUNsSEE7QUFBQTtBQU1BO0FBR0E7QUFPQTtBQVVBO0FBQUE7QUFNQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQXdGQTtBQXRGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU9BO0FBT0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///181\n')}}]);