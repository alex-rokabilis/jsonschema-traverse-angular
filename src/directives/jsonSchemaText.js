import { generateID } from "../utils/shortid";

export default function($compile) {
  return {
    restrict: "E",
    scope: { data: "=", schema: "=" },
    transclude: true,
    template: `
      <div>
        <label title="{{schema.description}}" for="{{uniqueID}}">{{schema.title}}</label>
        <input id="{{uniqueID}}" ng-model='data' type='text' 
        ng-required="schema.required"
        ng-minlength="schema.minLength"
        ng-maxlength="schema.maxLength"
        ng-pattern="schema.pattern"
        >
        <ng-transclude></ng-transclude>
      </div>
      `,
    controller: function($scope) {
      $scope.uniqueID = generateID();
    }
  };
}
