module.exports = (date) =>
  new Date(date).toLocaleDateString('es-ES', {
    month: 'short',
    day: 'numeric',
  });
