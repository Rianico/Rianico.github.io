(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{429:function(t,a,Q){"use strict";Q.r(a);var T=Q(25),r=Object(T.a)({},(function(){var t=this,a=t.$createElement,Q=t._self._c||a;return Q("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[Q("h1",{attrs:{id:"_09-排序优化"}},[Q("a",{staticClass:"header-anchor",attrs:{href:"#_09-排序优化"}},[t._v("#")]),t._v(" 09 | 排序优化")]),t._v(" "),Q("p",[t._v("几乎所有语言都会提供排序方法，比如 C 语言中 qsort()，C++ STL 中的 sort()、stable_sort()，还有 Java 语言中的 Collections.sort()，"),Q("strong",[t._v("如何实现一个通用的、高性能的工业级排序函数")]),t._v("？")]),t._v(" "),Q("p",[t._v("Java中使用的排序算法为堆排序，而C语言则是使用快速排序，那么这些语言是基于什么标准来选择排序算法的？")]),t._v(" "),Q("p",[Q("img",{attrs:{src:"https://static001.geekbang.org/resource/image/1f/fd/1f6ef7e0a5365d6e9d68f0ccc71755fd.jpg",alt:"各算法对比"}})]),t._v(" "),Q("p",[t._v("先从我们前面学习过的排序算法中选择一个通用高效的排序算法，需要从各个维度来进行筛选。首先，桶排序、计数排序、计数排序由于对使用场景较为苛刻，因此可以排除掉。其次，从空间复杂度来看，由于归并排序为O(n)级别，当数据量一大的时候，需要的内存空间是翻倍的，因此也可以排除。最后，再从时间复杂度来看，时间复杂度为O(nlogn)的快速排序无疑是比较合适的。")]),t._v(" "),Q("h2",{attrs:{id:"_1-如何优化快速排序"}},[Q("a",{staticClass:"header-anchor",attrs:{href:"#_1-如何优化快速排序"}},[t._v("#")]),t._v(" 1. 如何优化快速排序")]),t._v(" "),Q("p",[t._v("快速排序在某些场景（数据已经有序）会退化为"),Q("mjx-container",{staticClass:"MathJax",attrs:{jax:"SVG"}},[Q("svg",{staticStyle:{"vertical-align":"-0.566ex"},attrs:{xmlns:"http://www.w3.org/2000/svg",width:"8.019ex",height:"2.452ex",viewBox:"0 -833.9 3544.6 1083.9"}},[Q("g",{attrs:{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"matrix(1 0 0 -1 0 0)"}},[Q("g",{attrs:{"data-mml-node":"math"}},[Q("g",{attrs:{"data-mml-node":"mi"}},[Q("path",{attrs:{"data-c":"4F",d:"M740 435Q740 320 676 213T511 42T304 -22Q207 -22 138 35T51 201Q50 209 50 244Q50 346 98 438T227 601Q351 704 476 704Q514 704 524 703Q621 689 680 617T740 435ZM637 476Q637 565 591 615T476 665Q396 665 322 605Q242 542 200 428T157 216Q157 126 200 73T314 19Q404 19 485 98T608 313Q637 408 637 476Z"}})]),Q("g",{attrs:{"data-mml-node":"mtext",fill:"red",stroke:"red",transform:"translate(763, 0)"}},[Q("path",{attrs:{"data-c":"5C",d:"M56 731Q56 740 62 745T75 750Q85 750 92 740Q96 733 270 255T444 -231Q444 -239 438 -244T424 -250Q414 -250 407 -240Q404 -236 230 242T56 731Z"}}),Q("path",{attrs:{"data-c":"28",d:"M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z",transform:"translate(500, 0)"}})]),Q("g",{attrs:{"data-mml-node":"msup",transform:"translate(1652, 0)"}},[Q("g",{attrs:{"data-mml-node":"mi"}},[Q("path",{attrs:{"data-c":"6E",d:"M21 287Q22 293 24 303T36 341T56 388T89 425T135 442Q171 442 195 424T225 390T231 369Q231 367 232 367L243 378Q304 442 382 442Q436 442 469 415T503 336T465 179T427 52Q427 26 444 26Q450 26 453 27Q482 32 505 65T540 145Q542 153 560 153Q580 153 580 145Q580 144 576 130Q568 101 554 73T508 17T439 -10Q392 -10 371 17T350 73Q350 92 386 193T423 345Q423 404 379 404H374Q288 404 229 303L222 291L189 157Q156 26 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 112 180T152 343Q153 348 153 366Q153 405 129 405Q91 405 66 305Q60 285 60 284Q58 278 41 278H27Q21 284 21 287Z"}})]),Q("g",{attrs:{"data-mml-node":"mn",transform:"translate(600, 363) scale(0.707)"}},[Q("path",{attrs:{"data-c":"32",d:"M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z"}})])]),Q("g",{attrs:{"data-mml-node":"mtext",fill:"red",stroke:"red",transform:"translate(2655.6, 0)"}},[Q("path",{attrs:{"data-c":"5C",d:"M56 731Q56 740 62 745T75 750Q85 750 92 740Q96 733 270 255T444 -231Q444 -239 438 -244T424 -250Q414 -250 407 -240Q404 -236 230 242T56 731Z"}}),Q("path",{attrs:{"data-c":"29",d:"M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z",transform:"translate(500, 0)"}})])])])])]),t._v("，其本质原因还是"),Q("strong",[t._v("因为我们的分区点选择的不合理")]),t._v("。最理想的分区点是，能够分布在两端的数据量差不多，但这个往往是很难实现的。")],1),t._v(" "),Q("p",[t._v("如果只是随意的选择一个点，那么肯定会出现前面提到的场景，为了提高算法的"),Q("strong",[t._v("平均性能")]),t._v("，可以采用以下两种方法来降低这个概率。")]),t._v(" "),Q("h3",{attrs:{id:"_1-1-三数取中法"}},[Q("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-三数取中法"}},[t._v("#")]),t._v(" 1.1 三数取中法")]),t._v(" "),Q("p",[t._v("从区间的首中尾取出三个数，然后将3个数的中间值作为分区点，这样一来肯定比单独取一个数好。当数据规模较大的时候，可能也需要扩大取值范围，如五数取中法，十数取中法等。")]),t._v(" "),Q("h3",{attrs:{id:"_1-2-随机法"}},[Q("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-随机法"}},[t._v("#")]),t._v(" 1.2 随机法")]),t._v(" "),Q("p",[t._v("随机法就是每次都从要排序的区间里随机选取一个分区数，从概率上来看，选到的分区数可能不会太好，但同样的一般也不会太差。")]),t._v(" "),Q("h2",{attrs:{id:"_2-举例分析排序函数"}},[Q("a",{staticClass:"header-anchor",attrs:{href:"#_2-举例分析排序函数"}},[t._v("#")]),t._v(" 2. 举例分析排序函数")]),t._v(" "),Q("p",[t._v("接下来以Glibc 中的 qsort() 函数举例说明，虽然从名字看来，会角色这个算法是使用快速排序，但实际上是由多个算法杂糅在一起的。")]),t._v(" "),Q("p",[Q("strong",[t._v("qsort() 会优先使用归并排序来排序输入数据")]),t._v("，虽然归并排序的空间复杂度为O(n)，但是在数据规模很小（比如1KB，2KB）的时候，归并排序的空间复杂度并不会有太大的性能问题，这里就是典型的空间换时间技巧。")]),t._v(" "),Q("p",[t._v("当数据量太大（比如100MB）的时候，这时候使用归并排序就不合适了，而是会"),Q("strong",[t._v("改为使用快速排序算法")]),t._v("，并且也是使用三数取中法来选取分区点。")]),t._v(" "),Q("p",[t._v("为了处理堆栈溢出问题，当快速排序的区间大小小于4的时候，qsort() 会改为"),Q("strong",[t._v("使用插入排序")]),t._v("，从而减少栈深度。")]),t._v(" "),Q("p",[t._v("在某些场景下，时间复杂度为"),Q("mjx-container",{staticClass:"MathJax",attrs:{jax:"SVG"}},[Q("svg",{staticStyle:{"vertical-align":"-0.566ex"},attrs:{xmlns:"http://www.w3.org/2000/svg",width:"8.019ex",height:"2.452ex",viewBox:"0 -833.9 3544.6 1083.9"}},[Q("g",{attrs:{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"matrix(1 0 0 -1 0 0)"}},[Q("g",{attrs:{"data-mml-node":"math"}},[Q("g",{attrs:{"data-mml-node":"mi"}},[Q("path",{attrs:{"data-c":"4F",d:"M740 435Q740 320 676 213T511 42T304 -22Q207 -22 138 35T51 201Q50 209 50 244Q50 346 98 438T227 601Q351 704 476 704Q514 704 524 703Q621 689 680 617T740 435ZM637 476Q637 565 591 615T476 665Q396 665 322 605Q242 542 200 428T157 216Q157 126 200 73T314 19Q404 19 485 98T608 313Q637 408 637 476Z"}})]),Q("g",{attrs:{"data-mml-node":"mtext",fill:"red",stroke:"red",transform:"translate(763, 0)"}},[Q("path",{attrs:{"data-c":"5C",d:"M56 731Q56 740 62 745T75 750Q85 750 92 740Q96 733 270 255T444 -231Q444 -239 438 -244T424 -250Q414 -250 407 -240Q404 -236 230 242T56 731Z"}}),Q("path",{attrs:{"data-c":"28",d:"M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z",transform:"translate(500, 0)"}})]),Q("g",{attrs:{"data-mml-node":"msup",transform:"translate(1652, 0)"}},[Q("g",{attrs:{"data-mml-node":"mi"}},[Q("path",{attrs:{"data-c":"6E",d:"M21 287Q22 293 24 303T36 341T56 388T89 425T135 442Q171 442 195 424T225 390T231 369Q231 367 232 367L243 378Q304 442 382 442Q436 442 469 415T503 336T465 179T427 52Q427 26 444 26Q450 26 453 27Q482 32 505 65T540 145Q542 153 560 153Q580 153 580 145Q580 144 576 130Q568 101 554 73T508 17T439 -10Q392 -10 371 17T350 73Q350 92 386 193T423 345Q423 404 379 404H374Q288 404 229 303L222 291L189 157Q156 26 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 112 180T152 343Q153 348 153 366Q153 405 129 405Q91 405 66 305Q60 285 60 284Q58 278 41 278H27Q21 284 21 287Z"}})]),Q("g",{attrs:{"data-mml-node":"mn",transform:"translate(600, 363) scale(0.707)"}},[Q("path",{attrs:{"data-c":"32",d:"M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z"}})])]),Q("g",{attrs:{"data-mml-node":"mtext",fill:"red",stroke:"red",transform:"translate(2655.6, 0)"}},[Q("path",{attrs:{"data-c":"5C",d:"M56 731Q56 740 62 745T75 750Q85 750 92 740Q96 733 270 255T444 -231Q444 -239 438 -244T424 -250Q414 -250 407 -240Q404 -236 230 242T56 731Z"}}),Q("path",{attrs:{"data-c":"29",d:"M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z",transform:"translate(500, 0)"}})])])])])]),t._v("的算法性能并不一定比"),Q("mjx-container",{staticClass:"MathJax",attrs:{jax:"SVG"}},[Q("svg",{staticStyle:{"vertical-align":"-0.566ex"},attrs:{xmlns:"http://www.w3.org/2000/svg",width:"11.314ex",height:"2.262ex",viewBox:"0 -750 5001 1000"}},[Q("g",{attrs:{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"matrix(1 0 0 -1 0 0)"}},[Q("g",{attrs:{"data-mml-node":"math"}},[Q("g",{attrs:{"data-mml-node":"mi"}},[Q("path",{attrs:{"data-c":"4F",d:"M740 435Q740 320 676 213T511 42T304 -22Q207 -22 138 35T51 201Q50 209 50 244Q50 346 98 438T227 601Q351 704 476 704Q514 704 524 703Q621 689 680 617T740 435ZM637 476Q637 565 591 615T476 665Q396 665 322 605Q242 542 200 428T157 216Q157 126 200 73T314 19Q404 19 485 98T608 313Q637 408 637 476Z"}})]),Q("g",{attrs:{"data-mml-node":"mtext",fill:"red",stroke:"red",transform:"translate(763, 0)"}},[Q("path",{attrs:{"data-c":"5C",d:"M56 731Q56 740 62 745T75 750Q85 750 92 740Q96 733 270 255T444 -231Q444 -239 438 -244T424 -250Q414 -250 407 -240Q404 -236 230 242T56 731Z"}}),Q("path",{attrs:{"data-c":"28",d:"M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z",transform:"translate(500, 0)"}})]),Q("g",{attrs:{"data-mml-node":"mi",transform:"translate(1652, 0)"}},[Q("path",{attrs:{"data-c":"6E",d:"M21 287Q22 293 24 303T36 341T56 388T89 425T135 442Q171 442 195 424T225 390T231 369Q231 367 232 367L243 378Q304 442 382 442Q436 442 469 415T503 336T465 179T427 52Q427 26 444 26Q450 26 453 27Q482 32 505 65T540 145Q542 153 560 153Q580 153 580 145Q580 144 576 130Q568 101 554 73T508 17T439 -10Q392 -10 371 17T350 73Q350 92 386 193T423 345Q423 404 379 404H374Q288 404 229 303L222 291L189 157Q156 26 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 112 180T152 343Q153 348 153 366Q153 405 129 405Q91 405 66 305Q60 285 60 284Q58 278 41 278H27Q21 284 21 287Z"}})]),Q("g",{attrs:{"data-mml-node":"mi",transform:"translate(2252, 0)"}},[Q("path",{attrs:{"data-c":"6C",d:"M117 59Q117 26 142 26Q179 26 205 131Q211 151 215 152Q217 153 225 153H229Q238 153 241 153T246 151T248 144Q247 138 245 128T234 90T214 43T183 6T137 -11Q101 -11 70 11T38 85Q38 97 39 102L104 360Q167 615 167 623Q167 626 166 628T162 632T157 634T149 635T141 636T132 637T122 637Q112 637 109 637T101 638T95 641T94 647Q94 649 96 661Q101 680 107 682T179 688Q194 689 213 690T243 693T254 694Q266 694 266 686Q266 675 193 386T118 83Q118 81 118 75T117 65V59Z"}})]),Q("g",{attrs:{"data-mml-node":"mi",transform:"translate(2550, 0)"}},[Q("path",{attrs:{"data-c":"6F",d:"M201 -11Q126 -11 80 38T34 156Q34 221 64 279T146 380Q222 441 301 441Q333 441 341 440Q354 437 367 433T402 417T438 387T464 338T476 268Q476 161 390 75T201 -11ZM121 120Q121 70 147 48T206 26Q250 26 289 58T351 142Q360 163 374 216T388 308Q388 352 370 375Q346 405 306 405Q243 405 195 347Q158 303 140 230T121 120Z"}})]),Q("g",{attrs:{"data-mml-node":"mi",transform:"translate(3035, 0)"}},[Q("path",{attrs:{"data-c":"67",d:"M311 43Q296 30 267 15T206 0Q143 0 105 45T66 160Q66 265 143 353T314 442Q361 442 401 394L404 398Q406 401 409 404T418 412T431 419T447 422Q461 422 470 413T480 394Q480 379 423 152T363 -80Q345 -134 286 -169T151 -205Q10 -205 10 -137Q10 -111 28 -91T74 -71Q89 -71 102 -80T116 -111Q116 -121 114 -130T107 -144T99 -154T92 -162L90 -164H91Q101 -167 151 -167Q189 -167 211 -155Q234 -144 254 -122T282 -75Q288 -56 298 -13Q311 35 311 43ZM384 328L380 339Q377 350 375 354T369 368T359 382T346 393T328 402T306 405Q262 405 221 352Q191 313 171 233T151 117Q151 38 213 38Q269 38 323 108L331 118L384 328Z"}})]),Q("g",{attrs:{"data-mml-node":"mi",transform:"translate(3512, 0)"}},[Q("path",{attrs:{"data-c":"6E",d:"M21 287Q22 293 24 303T36 341T56 388T89 425T135 442Q171 442 195 424T225 390T231 369Q231 367 232 367L243 378Q304 442 382 442Q436 442 469 415T503 336T465 179T427 52Q427 26 444 26Q450 26 453 27Q482 32 505 65T540 145Q542 153 560 153Q580 153 580 145Q580 144 576 130Q568 101 554 73T508 17T439 -10Q392 -10 371 17T350 73Q350 92 386 193T423 345Q423 404 379 404H374Q288 404 229 303L222 291L189 157Q156 26 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 112 180T152 343Q153 348 153 366Q153 405 129 405Q91 405 66 305Q60 285 60 284Q58 278 41 278H27Q21 284 21 287Z"}})]),Q("g",{attrs:{"data-mml-node":"mtext",fill:"red",stroke:"red",transform:"translate(4112, 0)"}},[Q("path",{attrs:{"data-c":"5C",d:"M56 731Q56 740 62 745T75 750Q85 750 92 740Q96 733 270 255T444 -231Q444 -239 438 -244T424 -250Q414 -250 407 -240Q404 -236 230 242T56 731Z"}}),Q("path",{attrs:{"data-c":"29",d:"M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z",transform:"translate(500, 0)"}})])])])])]),t._v("差，虽然从趋势图上看，"),Q("mjx-container",{staticClass:"MathJax",attrs:{jax:"SVG"}},[Q("svg",{staticStyle:{"vertical-align":"-0.566ex"},attrs:{xmlns:"http://www.w3.org/2000/svg",width:"8.019ex",height:"2.452ex",viewBox:"0 -833.9 3544.6 1083.9"}},[Q("g",{attrs:{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"matrix(1 0 0 -1 0 0)"}},[Q("g",{attrs:{"data-mml-node":"math"}},[Q("g",{attrs:{"data-mml-node":"mi"}},[Q("path",{attrs:{"data-c":"4F",d:"M740 435Q740 320 676 213T511 42T304 -22Q207 -22 138 35T51 201Q50 209 50 244Q50 346 98 438T227 601Q351 704 476 704Q514 704 524 703Q621 689 680 617T740 435ZM637 476Q637 565 591 615T476 665Q396 665 322 605Q242 542 200 428T157 216Q157 126 200 73T314 19Q404 19 485 98T608 313Q637 408 637 476Z"}})]),Q("g",{attrs:{"data-mml-node":"mtext",fill:"red",stroke:"red",transform:"translate(763, 0)"}},[Q("path",{attrs:{"data-c":"5C",d:"M56 731Q56 740 62 745T75 750Q85 750 92 740Q96 733 270 255T444 -231Q444 -239 438 -244T424 -250Q414 -250 407 -240Q404 -236 230 242T56 731Z"}}),Q("path",{attrs:{"data-c":"28",d:"M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z",transform:"translate(500, 0)"}})]),Q("g",{attrs:{"data-mml-node":"msup",transform:"translate(1652, 0)"}},[Q("g",{attrs:{"data-mml-node":"mi"}},[Q("path",{attrs:{"data-c":"6E",d:"M21 287Q22 293 24 303T36 341T56 388T89 425T135 442Q171 442 195 424T225 390T231 369Q231 367 232 367L243 378Q304 442 382 442Q436 442 469 415T503 336T465 179T427 52Q427 26 444 26Q450 26 453 27Q482 32 505 65T540 145Q542 153 560 153Q580 153 580 145Q580 144 576 130Q568 101 554 73T508 17T439 -10Q392 -10 371 17T350 73Q350 92 386 193T423 345Q423 404 379 404H374Q288 404 229 303L222 291L189 157Q156 26 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 112 180T152 343Q153 348 153 366Q153 405 129 405Q91 405 66 305Q60 285 60 284Q58 278 41 278H27Q21 284 21 287Z"}})]),Q("g",{attrs:{"data-mml-node":"mn",transform:"translate(600, 363) scale(0.707)"}},[Q("path",{attrs:{"data-c":"32",d:"M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z"}})])]),Q("g",{attrs:{"data-mml-node":"mtext",fill:"red",stroke:"red",transform:"translate(2655.6, 0)"}},[Q("path",{attrs:{"data-c":"5C",d:"M56 731Q56 740 62 745T75 750Q85 750 92 740Q96 733 270 255T444 -231Q444 -239 438 -244T424 -250Q414 -250 407 -240Q404 -236 230 242T56 731Z"}}),Q("path",{attrs:{"data-c":"29",d:"M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z",transform:"translate(500, 0)"}})])])])])]),t._v("的趋势更抖一些，但在n很小的时候，时间复杂度的低阶，常数等就无法忽略了，这时候反而是这些参数代表了算法的性能，如下：")],1),t._v(" "),Q("blockquote",[Q("p",[t._v("knlogn+c = 1000  "),Q("em",[t._v("100")]),t._v("  log100 + 200 远大于10000")]),t._v(" "),Q("p",[t._v("n^2 = 100*100 = 10000")])]),t._v(" "),Q("p",[t._v("所以，对于小规模数据的排序，O(n2) 的排序算法并不一定比 O(nlogn) 排序算法执行的时间长。对于小数据量的排序，我们选择比较简单、不需要递归的插入排序算法。")])])}),[],!1,null,null,null);a.default=r.exports}}]);