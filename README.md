# Angular 7.2.15 with jspm2 example
## Only development! JIT mode


### Guide

```
jspm install
npm install
```

Start develop:
```
jspm run start
jspm run compile:watch
```

Generate full importmaps:
```
jspm run map
```


## FAQ


1. https://jspm.org/docs/guide Import Maps are currently an experimental feature in Chrome 74 (April 23 release). To use Import Maps in Chrome, first enable the Experimental Web Platform Features flag in chrome://flags, or copy the URL below directly:

```
chrome://flags/#enable-experimental-web-platform-features
```

2. Browser without --experimental-modules, but 
```
import core from '@angular/core';
@core.Component({
  ...
```
If desired, you can turn on transpiler.


### TODO
- Add transpiler
- Add builder to production (AOT)