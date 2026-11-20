# VECTORFLOW 3D

A browser-only triple integration volume calculator for a Multivariable Calculus project. Open `index.html` directly in a modern browser, or use VS Code Live Server. CDN access is needed to load Math.js, Three.js, Plotly.js, MathJax, and jsPDF.

## Technologies

- HTML5, CSS3, vanilla JavaScript ES modules
- Math.js for expression parsing/evaluation
- Three.js for the interactive 3D surface view
- Plotly.js for 2D cross-section plots
- MathJax for mathematical typography support
- jsPDF for browser-side PDF export

## Numerical method

The engine evaluates the three nested integrals using composite Simpson's rule, with the corresponding Jacobian: `1` in Cartesian, `r` in cylindrical, and `ρ² sin(φ)` in spherical coordinates. Resolution can be selected in the calculator. Results are numerical approximations, and the derivation reports the integration bounds, method, evaluation count, and result.

## Supported input and limitations

Bounds accept Math.js expressions and can refer to the coordinate variables. The equation field defines the upper bound of the innermost integration variable (`z` in Cartesian/cylindrical, `rho` in spherical); the corresponding upper-bound input initializes examples but is replaced by that equation when calculating. Trigonometric functions use radians. Supported functions include `sqrt`, `sin`, `cos`, `tan`, `abs`, `exp`, `log`, and `pow`. Bounds must describe a valid finite region in nested integration order. The engine does not infer projected x/y/r/angle limits from an equation; users must provide finite outer bounds that keep the region valid. Visualizations sample the configured bounds, so highly irregular or discontinuous boundaries may render coarsely.

## Examples

- Cylinder, radius 3 and height 5: `45π ≈ 141.3717 cm³`
- Sphere, radius 3: `36π ≈ 113.0973 cm³`
- Cone, radius 3 and height 5: `15π ≈ 47.1239 cm³`
- Paraboloid cap `z = 4-r²`, `0 ≤ r ≤ 2`: `8π ≈ 25.1327 cm³`

The PDF and copy actions work in the browser. Calculation history is stored in localStorage on the current browser/device.

## 3D presentation controls

The 3D stage spans the available page width and fits its camera and grid to the sampled region bounds after each calculation. The rendered solid includes sampled top/bottom surfaces and the coordinate-domain side boundaries with semi-transparent faces and a wire edge overlay. Drag to orbit, scroll to zoom, and right-drag (or Shift-drag) to pan. Front, top, side, and isometric buttons set camera views; Reset camera refits the current region. Fullscreen expands the stage, and Presentation mode hides the rest of the page while showing the current shape name and volume (press Escape or use the exit button to leave). The grid and tick labels are visual reference marks; their spacing scales with the region dimensions.

The renderer samples nested bounds on a finite mesh. Complex dependent outer bounds, discontinuities, or invalid surface regions can be computed only when the integration engine can evaluate the input, and may not be represented smoothly by the 3D surface sampling.
