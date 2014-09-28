# FOREST JS
Create forest in a HTML5 canvas

## API 
> // Create a gardener
>
> var g = gardener();

> // Change branch size in px (default 50)

> g.brancheSize(newSize);

> // Plant a tree
>
> g.createTree(tree_x_position, tree_size);

> // Draw a forest
>
> var context = document.getElementById('canvas').getContext("2d");
>
> var canvasTool = canvasTool();
>
> canvasTool.drawForest(context, g.forest);
