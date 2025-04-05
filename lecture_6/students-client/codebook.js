// Gets the name of a codebook item for a particular language.
export const getCodebookItemName = (codebook, codebookItemCode) => {
	let codebookItemName = codebookItemCode;
	const codebookItem = codebook.find((item) => item.code === codebookItemCode);
	if (codebookItem && codebookItem.names.en) {
		codebookItemName = codebookItem.names.en;
	}
	return codebookItemName;
};
