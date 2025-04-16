// Funkce vrátí anglický název číselníkové položky.
export const getCodebookItemName = (codebook, codebookItemCode) =>
	codebook.find((codebookItem) => codebookItem.code === codebookItemCode).names.en;
