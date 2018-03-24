import { generateID } from "../utils/shortid";

export default function($compile) {
  return {
    restrict: "E",
    scope: { data: "=", schema: "=" },
    template: `
      <div>
        <label title="{{schema.description}}" for="{{uniqueID}}">{{schema.title}}</label>
        <input id="{{uniqueID}}" ng-model='data' type='checkbox'>
      </div>`,
    controller: function($scope) {
      $scope.uniqueID = generateID();
    }
  };
}
