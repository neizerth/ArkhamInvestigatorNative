import { makeStore } from "@shared/lib";
import type { PropsWithChildren } from "react";
import { Provider } from "react-redux";

const store = makeStore();

debugger;
export const StoreProvider = ({ children }: PropsWithChildren) => {
	return (
		<Provider store={store}>
			{children}
		</Provider>
	)
};
