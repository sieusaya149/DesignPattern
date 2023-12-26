/*
Adapter is a structural design pattern that allows objects with incompatible
interfaces to collaborate.
*/

/*
    Hiện tại hệ thống đã setup service phân tích data với dữ liệu đầu vào là json
    và đã test và work rất oke
    Tuy nhiên vì sau này dữ liệu lớn dần dẫn đến nguồn dữ liệu có thể là xml, 
    ymal, csv điều này đòi hỏi cần có service mới xử lý cho input này
    solution1: phát triển mới service phân tích data
    solution2: chuyển đổi dữ liệu từ các nguồn khác sang json từ đó có thể sử lý

    áp dụng solution2
*/
class JsonAnalysisService
{
    constructor()
    {

    }
    
    startAnalysis(data: string)
    {
        console.log(`Analysis Json Data ${data}`)
    }
}

export enum InputCategory {
    CSV,
    JSON,
    XML,
    YAML
}

interface IAnalysisData {
    execute(data: string, type: InputCategory): void;
}

export class JsonServiceAdapter implements IAnalysisData{
    private analysisService: JsonAnalysisService; // adaptee
    constructor()
    {  
        this.analysisService = new JsonAnalysisService()
    }
    execute(data: string, type: InputCategory): void {
        if(type != InputCategory.JSON)
        {
            console.log("Converting data from others to JSON")
        }
        this.analysisService.startAnalysis(data)
    }
}
