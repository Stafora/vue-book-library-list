import dataJson from '@/assets/data.json'

export const JsonService = {
    getList() {
        return dataJson;
    },
    getItem(id) {
        let result = dataJson.filter(function(item) {
            return item.data.general.id == id;
        });
        
        return result;
        
    }
}