/**
 * Retrieve the length of the svg paths
 * @param {HTMLElement[]} paths svg paths
 */
function initPaths(paths) {
  paths.forEach((path) => {
    var pathLength = path.getTotalLength();

    // Starting position for dashes
    path.style.strokeDasharray = pathLength;
    path.style.strokeDashoffset = pathLength;
    path.getBoundingClientRect();
  });
}

export { initPaths };
