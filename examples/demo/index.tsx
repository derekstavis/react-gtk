import React from "react";

import {
  ApolloClient,
  InMemoryCache,
  gql,
  HttpLink,
  useQuery,
} from "@apollo/client";

import { render, GtkBox, GtkLabel } from "../../lib";

import GObject from "gobject";
import Gtk from "gtk";
import GLib from "glib";

import {
  GtkHeaderBar,
  GtkSpinner,
  GtkTreeView,
  GtkWindow,
} from "../../lib/components";
import { GtkTreeViewColumn } from "../../lib/components/GtkTreeView";

import { UserQuery } from "./__generated__";

const API_AUTH = GLib.environ_getenv(GLib.get_environ(), "API_AUTH");

const app = new Gtk.Application();

const client = new ApolloClient({
  uri: "https://api.staging.brexapps.com/v1/graphql",
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: "https://api.staging.brexapps.com/v1/graphql",
    headers: {
      Authorization: `Basic ${API_AUTH}`,
    },
  }),
});

type Transaction = {
  name: string;
  category: string;
  amount: number;
};

const columns: Array<GtkTreeViewColumn<keyof Transaction>> = [
  {
    type: GObject.TYPE_STRING,
    title: "Merchant Name",
    cellRenderer: new Gtk.CellRendererText({}),
    expand: true,
    resizable: true,
    attribute: "name" as "name",
  },
  {
    type: GObject.TYPE_STRING,
    title: "Category",
    cellRenderer: new Gtk.CellRendererText({}),
    expand: true,
    resizable: true,
    attribute: "category" as "category",
  },
  {
    type: GObject.TYPE_STRING,
    title: "Amount",
    cellRenderer: new Gtk.CellRendererText({}),
    expand: true,
    resizable: true,
    attribute: "amount" as "amount",
  },
];

const query = gql`
  query User {
    user {
      id
      firstName
      lastName
    }
    transactions(last: 100) {
      edges {
        node {
          id
          pendingAmount
          clearedAmount
          purchaseTime
          merchant {
            name
            merchantCategory {
              name
            }
          }
        }
      }
    }
  }
`;

const App = () => {
  const { data, loading, error } = useQuery<UserQuery>(query, {
    client,
    fetchPolicy: "network-only",
    errorPolicy: "all",
  });

  return (
    <>
      <GtkWindow
        width_request={550}
        height_request={450}
        onDestroy={() => app.quit()}
        titlebar={
          <GtkHeaderBar title="Brex Desktop" show_close_button></GtkHeaderBar>
        }
      >
        <GtkBox spacing={8} orientation={Gtk.Orientation.VERTICAL} margin={8}>
          {!loading && !!error && <GtkLabel title="Error" hexpand />}
          {!data && !error && (
            <GtkSpinner
              width_request={64}
              height_request={64}
              active={true}
              vexpand
            />
          )}
          {data?.transactions?.edges && !error && (
            <GtkTreeView
              data={data.transactions?.edges?.map((node) => ({
                name: node?.node?.merchant?.name,
                amount: node?.node?.clearedAmount ?? node?.node?.pendingAmount,
                category: node?.node?.merchant?.merchantCategory?.name,
              }))}
              columns={columns}
            />
          )}
        </GtkBox>
      </GtkWindow>
    </>
  );
};

Gtk.init(null);

app.connect("activate", () => {
  render(<App />, app);
  console.log("rendered");
});

app.run(ARGV);

Gtk.main();
