let itens = [];

const listarItens = (req, res) => {
  res.json(itens);
};

const adiciontarItem = (req, res) => {
  const { descricao } = req.body;
  const novoItem = { id: item.length + 1, descricao };
};
