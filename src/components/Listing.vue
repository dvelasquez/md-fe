<template>
    <v-card>
      <v-container
        fluid
        style="min-height: 0;"
        grid-list-lg
      >
        <v-layout row wrap>          
          <v-flex xs12 v-for="(ad, index) in apiData" :key='index'>
            <v-card color="white" class="black--text" >
              <v-container fluid grid-list-lg>
                <v-layout row>
                  <div class="listing--media">
                    <v-card-media class="v-card-media--image"
                      :src="ad.image"
                      height="10em"                      
                      cover
                    ></v-card-media>
                  </div>
                  <v-flex>
                    <div>
                      <div class="headline">{{ad.title}}</div>
                      <div>{{ad.commune + ' - ' + ad.region}}</div>
                      <div>{{ad.price}}</div>
                    </div>
                  </v-flex>                  
                </v-layout>
              </v-container>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
</template>
<script lang="ts">
/* tslint:disable max-line-length */
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data() {
    return {
      apiData: [
        {
          id: 54201474,
          image: 'https://www.yapo.cl/img/empleos-224.png',
          link:
            'https://www.yapo.cl/region_metropolitana/ofertas_de_empleo/sushero_maipu_54201474.htm',
          region: 'Región Metropolitana',
          commune: 'Maipú',
          price: '',
          currency: 'peso',
          secondaryPrice: '',
          title: 'Sushero Maipu',
          label: '',
          listTime: '2018-06-15 15:56:46',
          pro: 0,
          category: 'Ofertas de empleo',
          discount: false,
        },
        {
          id: 54201473,
          image: 'https://img.yapo.cl/images/97/9783593378.jpg',
          link:
            'https://www.yapo.cl/region_metropolitana/computadores/netbook_rosado_54201473.htm',
          region: 'Región Metropolitana',
          commune: 'San Joaquín',
          price: '$ 45.000',
          currency: 'peso',
          secondaryPrice: '',
          title: 'Netbook rosado',
          label: '',
          listTime: '2018-06-15 15:56:43',
          pro: 0,
          category: 'Computadores y accesorios',
          discount: false,
        },
        {
          id: 54201470,
          image: 'https://www.yapo.cl/img/empleos-224.png',
          link:
            'https://www.yapo.cl/region_metropolitana/ofertas_de_empleo/chofer_54201470.htm',
          region: 'Región Metropolitana',
          commune: 'Las Condes',
          price: '',
          currency: 'peso',
          secondaryPrice: '',
          title: 'Chofer',
          label: '',
          listTime: '2018-06-15 15:56:40',
          pro: 0,
          category: 'Ofertas de empleo',
          discount: false,
        },
        {
          id: 54201468,
          image: 'https://img.yapo.cl/images/97/9755783804.jpg',
          link:
            'https://www.yapo.cl/region_metropolitana/calzado/zapatillas_por_mayor_54201468.htm',
          region: 'Región Metropolitana',
          commune: 'La Florida',
          price: '$ 9.000',
          currency: 'peso',
          secondaryPrice: '',
          title: 'Zapatillas por mayor',
          label: '',
          listTime: '2018-06-15 15:56:37',
          pro: 0,
          category: 'Calzado',
          discount: false,
        },
        {
          id: 54201466,
          image: 'https://img.yapo.cl/images/97/9738801099.jpg',
          link:
            'https://www.yapo.cl/region_metropolitana/celulares/celulares_own_s4035_4g_54201466.htm',
          region: 'Región Metropolitana',
          commune: 'La Cisterna',
          price: '$ 55.000',
          currency: 'peso',
          secondaryPrice: '',
          title: 'Celulares OWN S4035 4G',
          label: '',
          listTime: '2018-06-15 15:56:34',
          pro: 0,
          category: 'Celulares, teléfonos y accesorios',
          discount: false,
        },
        {
          id: 54201464,
          image: 'https://img.yapo.cl/images/97/9720214981.jpg',
          link:
            'https://www.yapo.cl/region_metropolitana/ofertas_de_empleo/garzones_54201464.htm',
          region: 'Región Metropolitana',
          commune: 'Santiago',
          price: '$ 30.000',
          currency: 'peso',
          secondaryPrice: '',
          title: 'Garzones',
          label: '',
          listTime: '2018-06-15 15:56:29',
          pro: 1,
          category: 'Ofertas de empleo',
          discount: false,
        },
        {
          id: 54201463,
          image: 'https://img.yapo.cl/images/97/9741121138.jpg',
          link:
            'https://www.yapo.cl/region_metropolitana/computadores/egpu_notebook___fuente_de_poder_54201463.htm',
          region: 'Región Metropolitana',
          commune: 'La Florida',
          price: '$ 45.000',
          currency: 'peso',
          secondaryPrice: '',
          title: 'Egpu notebook + fuente de poder',
          label: '',
          listTime: '2018-06-15 15:56:29',
          pro: 0,
          category: 'Computadores y accesorios',
          discount: false,
        },
        {
          id: 54201460,
          image: 'https://img.yapo.cl/images/97/9794361463.jpg',
          link:
            'https://www.yapo.cl/region_metropolitana/consolas_videojuegos/juegos_wii_wiiu_nintendo_ds_3ds_54201460.htm',
          region: 'Región Metropolitana',
          commune: 'Providencia',
          price: '',
          currency: 'peso',
          secondaryPrice: '',
          title: 'Juegos wii wiiu nintendo ds 3ds',
          label: '',
          listTime: '2018-06-15 15:56:24',
          pro: 0,
          category: 'Consolas, videojuegos y accesorios',
          discount: false,
        },
        {
          id: 54201459,
          image: 'https://img.yapo.cl/images/97/9770342326.jpg',
          link:
            'https://www.yapo.cl/region_metropolitana/celulares/huawei_y7__54201459.htm',
          region: 'Región Metropolitana',
          commune: 'La Cisterna',
          price: '$ 75.000',
          currency: 'peso',
          secondaryPrice: '',
          title: 'Huawei Y7 ',
          label: '',
          listTime: '2018-06-15 15:56:22',
          pro: 0,
          category: 'Celulares, teléfonos y accesorios',
          discount: false,
        },
        {
          id: 54201456,
          image: 'https://img.yapo.cl/images/97/9784437870.jpg',
          link:
            'https://www.yapo.cl/region_metropolitana/autos/oferta_volkswagen_gol_g5_2011_54201456.htm',
          region: 'Región Metropolitana',
          commune: 'Maipú',
          price: '$ 3.750.000',
          currency: 'peso',
          secondaryPrice: '',
          title: 'OFERTA Volkswagen Gol G5 2011',
          label: '',
          listTime: '2018-06-15 15:56:14',
          pro: 1,
          category: 'Autos, camionetas y 4x4',
          discount: false,
        },
        {
          id: 54201454,
          image: 'https://www.yapo.cl/img/inmuebles-224.png',
          link:
            'https://www.yapo.cl/region_metropolitana/arrendar/departamento__54201454.htm',
          region: 'Región Metropolitana',
          commune: 'Cerro Navia',
          price: '$ 200.000',
          currency: 'peso',
          secondaryPrice: 'UF 7,37',
          title: 'departamento ',
          label: '',
          listTime: '2018-06-15 15:56:11',
          pro: 0,
          category: 'Arriendo',
          discount: false,
        },
        {
          id: 54002697,
          image: 'https://img.yapo.cl/images/90/9037512075.jpg',
          link:
            'https://www.yapo.cl/region_metropolitana/muebles/nuevo_sofa_marca_mica_modelo_tofu_54002697.htm',
          region: 'Región Metropolitana',
          commune: 'Ñuñoa',
          price: '$ 85.000',
          currency: 'peso',
          secondaryPrice: '',
          title: 'Nuevo Sofá marca mica modelo Tofu',
          label: '',
          listTime: '2018-06-15 15:56:07',
          pro: 0,
          category: 'Muebles',
          discount: false,
        },
        {
          id: 53998321,
          image: 'https://img.yapo.cl/images/90/9062001423.jpg',
          link:
            'https://www.yapo.cl/region_metropolitana/celulares/samsung_s8_plus_53998321.htm',
          region: 'Región Metropolitana',
          commune: 'Conchalí',
          price: '$ 280.000',
          currency: 'peso',
          secondaryPrice: '',
          title: 'Samsung S8 plus',
          label: '',
          listTime: '2018-06-15 15:56:07',
          pro: 0,
          category: 'Celulares, teléfonos y accesorios',
          discount: false,
        },
        {
          id: 53694503,
          image: 'https://img.yapo.cl/images/79/7914925387.jpg',
          link:
            'https://www.yapo.cl/region_metropolitana/jardin_herramientas/taladro_atornillador_inalambrico_s_carbones_dewalt_53694503.htm',
          region: 'Región Metropolitana',
          commune: 'Santiago',
          price: '$ 125.000',
          currency: 'peso',
          secondaryPrice: '',
          title: 'Taladro Atornillador Inalambrico S/Carbones DeWALT',
          label: '',
          listTime: '2018-06-15 15:56:07',
          pro: 1,
          category: 'Jardín, herramientas y exteriores',
          discount: false,
        },
        {
          id: 52957582,
          image: 'https://img.yapo.cl/images/53/5302095862.jpg',
          link:
            'https://www.yapo.cl/region_metropolitana/negocios_maquinaria_construccion/soldadora_mig_con_y_sin_gas_200amp_energy_52957582.htm',
          region: 'Región Metropolitana',
          commune: 'Santiago',
          price: '$ 200.000',
          currency: 'peso',
          secondaryPrice: '',
          title: 'Soldadora Mig Con Y Sin Gas 200amp Energy',
          label: '',
          listTime: '2018-06-15 15:56:07',
          pro: 1,
          category: 'Negocios, maquinaria y construcción',
          discount: false,
        },
        {
          id: 52738305,
          image: 'https://img.yapo.cl/images/45/4520529162.jpg',
          link:
            'https://www.yapo.cl/region_metropolitana/negocios_maquinaria_construccion/soldadora_inverter_tig_gladiator_52738305.htm',
          region: 'Región Metropolitana',
          commune: 'Santiago',
          price: '$ 145.000',
          currency: 'peso',
          secondaryPrice: '',
          title: 'Soldadora inverter tig gladiator',
          label: '',
          listTime: '2018-06-15 15:56:07',
          pro: 1,
          category: 'Negocios, maquinaria y construcción',
          discount: false,
        },
        {
          id: 51900825,
          image: 'https://img.yapo.cl/images/16/1618559789.jpg',
          link:
            'https://www.yapo.cl/region_metropolitana/negocios_maquinaria_construccion/soldadora_inverter_electrodo_energy_51900825.htm',
          region: 'Región Metropolitana',
          commune: 'Santiago',
          price: '$ 70.000',
          currency: 'peso',
          secondaryPrice: '',
          title: 'Soldadora inverter electrodo energy',
          label: '',
          listTime: '2018-06-15 15:56:07',
          pro: 1,
          category: 'Negocios, maquinaria y construcción',
          discount: false,
        },
        {
          id: 51889651,
          image: 'https://img.yapo.cl/images/16/1645773370.jpg',
          link:
            'https://www.yapo.cl/region_metropolitana/negocios_maquinaria_construccion/soldadora_inverter_gladiator_51889651.htm',
          region: 'Región Metropolitana',
          commune: 'Santiago',
          price: '$ 95.000',
          currency: 'peso',
          secondaryPrice: '',
          title: 'Soldadora inverter gladiator',
          label: '',
          listTime: '2018-06-15 15:56:07',
          pro: 1,
          category: 'Negocios, maquinaria y construcción',
          discount: false,
        },
        {
          id: 51117878,
          image: 'https://img.yapo.cl/images/90/9046215432.jpg',
          link:
            'https://www.yapo.cl/region_metropolitana/jardin_herramientas/juego_de_atornillador_de_impacto_dewalt_51117878.htm',
          region: 'Región Metropolitana',
          commune: 'Santiago',
          price: '$ 190.000',
          currency: 'peso',
          secondaryPrice: '',
          title: 'Juego De Atornillador De Impacto DeWalt',
          label: '',
          listTime: '2018-06-15 15:56:07',
          pro: 1,
          category: 'Jardín, herramientas y exteriores',
          discount: false,
        },
        {
          id: 46877761,
          image: 'https://img.yapo.cl/images/55/5579443489.jpg',
          link:
            'https://www.yapo.cl/region_metropolitana/negocios_maquinaria_construccion/sierra_de_banco_de_254mm__10__dewalt_46877761.htm',
          region: 'Región Metropolitana',
          commune: 'Santiago',
          price: '$ 255.000',
          currency: 'peso',
          secondaryPrice: '',
          title: 'SIERRA DE BANCO DE 254mm (10")DeWalt',
          label: '',
          listTime: '2018-06-15 15:56:07',
          pro: 1,
          category: 'Negocios, maquinaria y construcción',
          discount: false,
        },
        {
          id: 42225297,
          image: 'https://img.yapo.cl/images/05/0535360650.jpg',
          link:
            'https://www.yapo.cl/region_metropolitana/negocios_maquinaria_construccion/siding_fibrocemento_osb_internit_42225297.htm',
          region: 'Región Metropolitana',
          commune: 'La Pintana',
          price: '$ 3.500',
          currency: 'peso',
          secondaryPrice: '',
          title: 'Siding fibrocemento osb internit',
          label: '',
          listTime: '2018-06-15 15:56:07',
          pro: 1,
          category: 'Negocios, maquinaria y construcción',
          discount: false,
        },
      ],
    };
  },
})
export default class Listing extends Vue {}
</script>
<style lang="scss" scoped>
.v-card-media--image {
  width: 10em;
}
.listing--media {
  width: 10em;
}
</style>
