simple-path-normalize
=====================

JavaScript attempt at fixing/understanding pathname resolutions when given a 
pathname string containing '.' and '..' ~ should return normalized directory 
pathname.  If path has a URI scheme, this should be preserved.

tape & testling
===============

Using [tape](https://github.com/substack/tape) to run tests from the node.js 
command line, and in order to use [testling](http://ci.testling.com/) from the
github service hook.

[![browser support](https://ci.testling.com/dfkaye/simple-path-normalize.png)](https://ci.testling.com/dfkaye/simple-path-normalize)

[Things I've found about checking things in for testling to work](https://gist.github.com/dfkaye/5225546)


__from the command line__

    cd ./simple-path-normalize
  
    npm test
    or
    node test/suite.js
  
npm
============

___TODO___