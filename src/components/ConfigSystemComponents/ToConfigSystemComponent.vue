<template>
    <div class="card mt-3">
        <TabView :scrollable="true">
            <TabPanel header="Configuração Clinica">
               
            </TabPanel>
            <TabPanel header="Configuração Agenda">

            </TabPanel>
            <TabPanel header="Configuração Fluxo Caixa">

            </TabPanel>
            <TabPanel header="Configuração Usuário">
                 <TabView :scrollable="true">
                    <TabPanel header="Usuário/Senha"></TabPanel>
                    <TabPanel header="Permissões"></TabPanel>
                </TabView>
            </TabPanel>
        </TabView>
    </div>
</template>

<script>
import TabPanel from "primevue/tabpanel";
import TabView from "primevue/tabview";

export default{
    components:{
        TabPanel,
        TabView
    }
}
</script>

<style scoped></style>