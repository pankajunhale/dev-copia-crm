
export class RoutingView
{
    constructor(  stepNo: string,stepName: string,procedure: string,workCentre: string,timeUOM: string,plannedLabourTime: string,plannedMachineTime: string,plannedSetupTime: string,totalPlannedTime: string,stepType: string,stepCategory: string,stepStatus: string,userName: string,supervisorName: string,isOpen: boolean,){
        this.stepNo=stepNo;
        this.stepName=stepName;
        this.procedure=procedure;
        this.workCentre=workCentre;
        this.timeUOM=timeUOM;
        this.plannedLabourTime=plannedLabourTime;
        this.plannedMachineTime=plannedMachineTime;
        this.plannedSetupTime=plannedSetupTime;
        this.totalPlannedTime=totalPlannedTime;
        this.stepType=stepType;
        this.stepCategory=stepCategory;
        this.stepStatus=stepStatus;
        this.userName=userName;
        this.supervisorName=supervisorName;
        this.isOpen=isOpen;
    }
    stepNo: string
    stepName: string
    procedure: string
    workCentre: string
    timeUOM: string
    plannedLabourTime: string
    plannedMachineTime: string
    plannedSetupTime: string
    totalPlannedTime: string
    stepType: string
    stepCategory: string
    stepStatus: string
    userName: string
    supervisorName: string
    isOpen: boolean
}