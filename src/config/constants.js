import React from 'react';

// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Schedule from "@material-ui/icons/Schedule";
import List from "@material-ui/icons/List";

export const sectionTitles = {
  "consiliul":[
    {
      tabButtonTitle: "Echipă",
      tabIcon: Dashboard
    },
    {
      tabButtonTitle: "Rapoarte de activitate",
      tabIcon: List
    },
    {
      tabButtonTitle: "Dezbateri publice",
      tabIcon: List
    },
    {
      tabButtonTitle: "Hotărâri Consiliul Local",
      tabIcon: List
    },
    {
      tabButtonTitle:  "Proiecte de hotărâri",
      tabIcon: List
    },
    {
      tabButtonTitle: "Declarații de avere Consiliul Local",
      tabIcon: Schedule
    }
  ],
  "guvernanta":[
    {
      tabButtonTitle: "Conducere",
      tabIcon: Dashboard
    },
    {
      tabButtonTitle: "Structură",
      tabIcon: Dashboard
    },
    {
      tabButtonTitle: "Formulare",
      tabIcon: Dashboard
    },
    {
      tabButtonTitle: "Taxe și impozite locale",
      tabIcon: Dashboard
    },
    {
      tabButtonTitle: "Declarații de avere",
      tabIcon: Dashboard
    },
    {
      tabButtonTitle: "Informatii Publice",
      tabIcon: List
    },
    {
      tabButtonTitle: "Proiecte",
      tabIcon: List
    },
    {
      tabButtonTitle: "Buget",
      tabIcon: List
    },
  ],
  "comuna":[
    {
      tabButtonTitle: "Știri și anunțuri",
      tabIcon: Dashboard
    },
    {
      tabButtonTitle: "Evenimente",
      tabIcon: List
    },
    {
      tabButtonTitle: "Inițiative locale",
      tabIcon: List
    },
    {
      tabButtonTitle: "Educație și cultură",
      tabIcon: List
    },
    {
      tabButtonTitle:  "Tradiții",
      tabIcon: List
    },
  ]
};
