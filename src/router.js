import Vue from "vue";
import Router from "vue-router";
import LoginView from "@/views/LoginView";
import TemplateViews from "@/views/TemplateViews";
import SpecialtieView from "@/views/SpecialtieView";
import MedicalProcedureView from "@/views/MedicalProcedureView";
import HealthInsuranceView from "@/views/HealthInsuranceView";
import EmployeeView from "@/views/EmployeeView";
import OccupationView from "@/views/OccupationView";
import PatientView from "@/views/PatientView";
import HelloWorld from "@/components/HelloWorld";
import ScheduleView from "@/views/ScheduleView";
import QueueView from "@/views/QueueView";
Vue.use(Router);

const router = new Router({
    mode: "history",
    routes:[
        {
            path: "/",
            component: LoginView
        },
        {
            path:"/admin",
            component: TemplateViews,
            children:[
                {
                    path:'especialidades',
                    component: SpecialtieView,
                    name:"specialtie",
                    children:[
                        {path:'novo',component:SpecialtieView,name:"specialtie_new"},
                        {path:':id/editar',component:SpecialtieView,name:"specialtie_edit"}
                    ]
                },
                {
                    path:'procedimentos',
                    component: MedicalProcedureView,
                    name: "medicalProc",
                    children:[
                        {path:'novo',component: MedicalProcedureView,name:"medicalProcNew"},
                        {path: ':id/editar',component: MedicalProcedureView,name:"medicalProcEdit"},
                        {path: 'preco-procedimento',component: MedicalProcedureView,name:"priceMedicalProcedure"}
                    ]
                },
                {
                    path:'convenios',
                    component:HealthInsuranceView,
                    name:'healthInsurance',
                    children:[
                        {path: 'novo',component: HealthInsuranceView, name: "healthInsuranceNew"},
                        {path: ':id/editar',component: HealthInsuranceView,name:"healthInsuranceEdit"},
                        {path: 'novo-tipo-plano',component: HealthInsuranceView,name:"typeHealthInsuranceNew"},
                        {path: ':id/editar/novo-tipo-plano',component: HealthInsuranceView,name: "typeHealthInsuranceEdit"},
                    ]
                },
                {
                    path: 'funcionarios',
                    component: EmployeeView,
                    name:'employee',
                    children:[
                        {path: 'novo',component: EmployeeView,name: "employeeNew"},
                        {path: ':id/editar',component: EmployeeView,name: "employeeEdit"}
                    ]
                },
                {
                    path: 'funcoes',
                    component: OccupationView,
                    name: 'occupation',
                    children: [
                        {path: 'novo',component: OccupationView,name: "occupationNew"},
                        {path: ':id/editar',component: OccupationView,name: "occupationEdit"}
                    ]
                },
                {
                    path:"pacientes",
                    component: PatientView,
                    name: "patient",
                    children: [
                        {path:'novo',component: PatientView,name:'patientNew'},
                    ]
                },
                {
                    path: "Agendamentos",
                    component: ScheduleView,
                    name: 'schedule',
                    children: [
                        {path: 'novo',component: ScheduleView,name:'scheduleNew'}
                    ]
                },
                {
                    path:"Profissional-saude",
                    component: QueueView,
                    name:'queue',
                    children:[]
                },
                {
                    path:'teste',
                    component: HelloWorld
                }
            ],
        }
    ]
});

export default router;
