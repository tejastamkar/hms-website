import { utils, writeFile } from 'xlsx';

export const exportData = async (data) => {
    const workbook = utils.book_new();
    const worksheet = utils.json_to_sheet(data);
    utils.book_append_sheet(workbook, worksheet, "Sheet1");

    writeFile(workbook, "data-log.xlsx");
}