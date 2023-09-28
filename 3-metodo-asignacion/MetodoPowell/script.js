document.getElementById('optimizationForm').addEventListener('submit', function(event) {
  event.preventDefault();

  let costs = document.getElementById('costs').value.split(',').map(Number);
  let requirements = document.getElementById('requirements').value.split(',').map(Number);
  let availability = Number(document.getElementById('availability').value);

  let fnc = function (v) {
      let costoTotal = 0;
      let materiaPrimaTotal = 0;

      for (let i = 0; i < v.length; i++) {
          costoTotal += v[i] * costs[i];
          materiaPrimaTotal += v[i] * requirements[i];
      }

      if (materiaPrimaTotal > availability + math.epsilon) {
         console.log("el numero es muy grande")
      }

      return costoTotal;
  };

  let x0 = [50, 25]; 

  function minimize_gradient_descent(fnc, x0, alpha = 0.01, tol = math.epsilon) {
      let x = x0.slice(); // Copia el vector inicial
      let fx = fnc(x); // Calcula el valor inicial de la función

      while (true) {
          // Calcula el gradiente en el punto actual
          let gradient = [math.derivative('2 * x ^ 2 + 3 * x + 4', 'x'), math.derivative('2 * x ^ 2 + 3 * x + 4', 'x')];

          // Actualiza el punto actual moviéndolo en la dirección del gradiente
          let x_new = math.subtract(x, math.multiply(alpha, gradient.map(Number)));

          // Calcula el valor de la función en el nuevo punto
          let fx_new = fnc(x_new);

          // Si la mejora es menor que la tolerancia, detén el algoritmo
          if (math.abs(fx_new - fx) < tol) { 
              break;
          }

          x = x_new;
          fx = fx_new;
      }

      return {x: x, fx: fx};
  }

  let solution = minimize_gradient_descent(fnc, x0);
  console.log(solution.x)

  document.getElementById('result').innerText = 'La solución óptima es ' + solution.x;
});





