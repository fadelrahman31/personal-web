<template>
    <v-app>
        <v-content>
        </v-content>
        <div class="text-center">
    <v-bottom-sheet v-model="sheet">
      <template v-slot:activator="{ on }">
        <v-btn
          color="purple"
          dark
          v-on="on"
        >
          Open In
        </v-btn>
      </template>
      <v-col
        cols="12"
                        md="7"
                        class="flex-grow-1 flex-shrink-0"
      >
      
            <v-card
                class="mx-auto ma-3 pa-2"
                raised
            >
                <iframe width="350" height="430" allow="microphone;" src="https://console.dialogflow.com/api-client/demo/embedded/9daadff8-e77e-45b8-8096-bfa2d7275218">
                </iframe>
            </v-card>
      </v-col>
      
    </v-bottom-sheet>
  </div>
        
    </v-app>
</template>

<script>
export default {
    name: 'Test',
    data: () => ({
        sheet: false
    })
}
</script>