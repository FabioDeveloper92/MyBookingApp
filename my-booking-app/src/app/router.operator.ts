import { Action } from "@ngrx/store";
import { filter, OperatorFunction } from "rxjs";
import { GoAction } from "./router.actions";

export function ofRoute(
    route: string | string[]
  ): OperatorFunction<Action, Action> {
    return filter((action: Action) => {
      const isRouteAction = action.type === GoAction.type;
      
      if (isRouteAction) {
        const routePath = (action as ReturnType<typeof GoAction>).path.map<string>(x => x.toString())[0];

        if (Array.isArray(route)) {
          return route.includes(routePath);
        } else {
          return routePath === route;
        }
      }
      return isRouteAction;
    });
  }
  