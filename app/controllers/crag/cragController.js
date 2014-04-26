app.controller('cragController', function($scope, cragId){

  // Prepare the state object
  $scope.state = {};

  // Dummy crag object until I get API set up
  // Also putting it here temporarily until I get the service done
  var dummyCrag = {
    id: cragId,
    name: 'Cochrane Lane',
    hero_image_url: 'http://ascentnb.com/wp-content/uploads/2013/11/Shawn_Waterwalk_1-980x600.jpg',
    provstate: 'New Brunswick',
    country: 'Canada',
    description: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, ratione, ab, numquam laborum esse cum assumenda consectetur quis nostrum exercitationem reprehenderit atque laudantium obcaecati fugit facere explicabo repellendus. Tempore, quas, totam neque amet in aperiam error facere adipisci quidem fugiat reiciendis voluptatem eligendi vel cum illo rerum quos praesentium necessitatibus.</p><p>Cupiditate, soluta, mollitia, similique, culpa unde ea facilis ut accusantium sit odio totam corporis a laudantium fugit excepturi. Maxime, ut eveniet atque consectetur earum laboriosam eius iusto veniam ab qui dignissimos sed minima voluptatum illum nam sapiente ipsa. Voluptas, culpa, ut sed facilis incidunt esse doloribus eius omnis. Omnis, in!</p>',
    directions: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, laboriosam, nulla, quisquam, voluptas eveniet at quibusdam ex saepe blanditiis unde recusandae excepturi culpa nostrum amet architecto voluptates iste eos doloremque incidunt temporibus doloribus magnam praesentium suscipit a dolore non perferendis. Saepe, ad quod necessitatibus repellendus dolorem adipisci voluptatem similique molestiae explicabo error consectetur vero dignissimos et commodi eos accusamus temporibus!</p>',
    history: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, et officia nam est maiores provident praesentium eos dicta tenetur excepturi tempore dolores repellendus doloremque ipsam deleniti ratione quis culpa ab quod incidunt reprehenderit molestias ducimus sunt aspernatur error qui inventore dolor. Aperiam, aut, quos, placeat molestias praesentium maiores a facere inventore debitis eligendi beatae veritatis odit voluptates tempora saepe! Nam, dolorum adipisci vitae nostrum mollitia temporibus quas illo. Repudiandae, voluptatibus sequi suscipit at atque animi?</p><p>Ullam similique id ipsam tenetur beatae esse totam optio reiciendis. Tempore, laborum, provident. Fuga, quas, obcaecati, deserunt eos vel odit quibusdam explicabo ea ipsum molestiae dolor enim quia rem. Aut, corporis, sit, eveniet, sunt voluptatum impedit exercitationem aliquid hic eos odio ullam asperiores temporibus doloribus doloremque error. Illum assumenda consequatur nostrum dolorem optio aspernatur. Repudiandae, id, ullam, delectus molestiae omnis nisi reprehenderit deleniti rerum odit consequuntur neque consequatur natus cupiditate corrupti repellendus consectetur officia labore.</p>',
    walls: ['', ''],
    routes: ['', '']
  }

  $scope.state.crag = dummyCrag;
});
