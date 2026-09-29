export function verificarSituacao(material) {
  if (material.quantidade === 0) {
    return "Sem estoque";
  }

  if (material.quantidade < material.estoqueMinimo) {
    return "Estoque baixo";
  }

  return "Normal";
}