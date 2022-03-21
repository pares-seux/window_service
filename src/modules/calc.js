const calc = () => {
  const calcBlock = document.getElementById("calc");
  const calcType = document.getElementById("calc-type");
  const calcMaterial = document.getElementById("calc-type-material");
  const calcSquare = document.getElementById("calc-input");
  const total = document.getElementById("calc-total");

  const countCalc = () => {
    const calcTypeValue = +calcType.options[calcType.selectedIndex].value;
    const calcMaterialValue =
      +calcMaterial.options[calcMaterial.selectedIndex].value;

    const calcSquareValue = calcSquare.value !== "" ? +calcSquare.value : 1;
    let totalValue = "";
    if (calcType.value && calcMaterial.value) {
      totalValue = calcTypeValue * calcMaterialValue * calcSquareValue;
    } else {
      totalValue = "";
    }
    console.log(totalValue);
    total.value = Math.round(totalValue);
  };

  calcBlock.addEventListener("input", (e) => {
    if (
      e.target === calcType ||
      e.target === calcSquare ||
      e.target === calcMaterial
    ) {
      countCalc();
    }
  });
};

export default calc;
