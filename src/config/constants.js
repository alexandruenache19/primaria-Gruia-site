import React from 'react'

// @material-ui/icons
import Dashboard from '@material-ui/icons/Dashboard'
import Schedule from '@material-ui/icons/Schedule'
import List from '@material-ui/icons/List'

export const sectionTitles = {
  'consiliul': [
    {
      tabButtonTitle: 'Echipă',
      tabIcon: Dashboard
    },
    {
      tabButtonTitle: 'Rapoarte de activitate',
      tabIcon: List
    },
    {
      tabButtonTitle: 'Dezbateri publice',
      tabIcon: List
    },
    {
      tabButtonTitle: 'Hotărâri Consiliul Local',
      tabIcon: List
    },
    {
      tabButtonTitle: 'Proiecte de hotărâri',
      tabIcon: List
    },
    {
      tabButtonTitle: 'Declarații de avere Consiliul Local',
      tabIcon: Schedule
    }
  ],
  'guvernanta': [
    {
      tabButtonTitle: 'Structură',
      tabIcon: Dashboard
    },
    {
      tabButtonTitle: 'Formulare',
      tabIcon: Dashboard
    },
    {
      tabButtonTitle: 'Taxe și impozite locale',
      tabIcon: Dashboard
    },
    {
      tabButtonTitle: 'Declarații de avere',
      tabIcon: Dashboard
    },
    {
      tabButtonTitle: 'Informatii Publice',
      tabIcon: List
    },
    {
      tabButtonTitle: 'Proiecte',
      tabIcon: List
    },
    {
      tabButtonTitle: 'Buget',
      tabIcon: List
    }
  ],
  'comuna': [
    {
      tabButtonTitle: 'Știri și anunțuri',
      tabIcon: Dashboard
    },
    {
      tabButtonTitle: 'Evenimente',
      tabIcon: List
    },
    {
      tabButtonTitle: 'Inițiative locale',
      tabIcon: List
    },
    {
      tabButtonTitle: 'Educație și cultură',
      tabIcon: List
    },
    {
      tabButtonTitle: 'Tradiții',
      tabIcon: List
    }
  ]
}
export const membri = {
  'consiliul': [
    {
      nume: 'Nume',
      descriere: 'Descriere',
      linkAvatar: '/img/profile1.jpg'
    },
    {
      nume: 'Nume',
      descriere: 'Descriere',
      linkAvatar: '/img/profile1.jpg'
    },
    {
      nume: 'Nume',
      descriere: 'Descriere',
      linkAvatar: '/images/profile1.jpg'
    }
  ],
  'guvernanta': [
    {
      nume: 'Klau$ zis baiatu cu 4 case',
      descriere: 'Drumul durerii de la Sibiu la Bucuresti. Plecat de la Sibiu cu vise mareta de a fura alaturi de baietii din grupa mare a fost dezamagit orientandu se catre Bruxelles',
      linkAvatar: '/images/profile1.jpg'
    },
    {
      nume: 'Dragnea mana usoara',
      descriere: 'Reusind cu o deosebita inversunare sa conduca Romania timp de 3 ani specimenul Dragnea mana usoara continua sa gaseasca metode de a ocoli beciul domnesc.',
      linkAvatar: '/images/profile2.jpg'
    },
    {
      nume: 'Viorica',
      descriere: 'Cunoscuta si sub numele de ..Prim ministru prim ministru dar Liviu ce fac acum?.. a reusit sa impresioneze o intreaga natiune cu abilitatile lingvistice',
      linkAvatar:'/images/profile3.jpg'
    }
  ]
}
