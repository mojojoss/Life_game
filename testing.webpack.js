var context = require.context('./main', true, /-test\.js$/);
context.keys().forEach(context);