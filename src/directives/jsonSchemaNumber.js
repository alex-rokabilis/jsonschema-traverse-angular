import { generateID } from "../utils/shortid";

export default function($compile) {
  return {
    restrict: "E",
    scope: { data: "=", schema: "=" },
    transclude: true,
    template: `
      <div>
        <label title="{{schema.description}}" for="{{uniqueID}}">{{schema.title}}</label>
        <input id="{{uniqueID}}" ng-model='data' type='number' 
        ng-required="schema.required"
        ng-min="schema.minLength"
        ng-max="schema.maxLength"
        >
        <ng-transclude></ng-transclude>
      </div>
      `,
    controller: function($scope) {
      $scope.uniqueID = generateID();
    }
  };
}
