"use client";

import { FunctionComponent, PropsWithChildren } from "react";
import { Provider as ReduxProvider } from "react-redux";

import { store } from "@/store/store";

type IProvidersProps = PropsWithChildren;

const AppProvider: FunctionComponent<IProvidersProps> = ({
  children,
}: IProvidersProps) => {
  return (
    <>
      <ReduxProvider store={store}>{children}</ReduxProvider>
    </>
  );
};

export default AppProvider;
