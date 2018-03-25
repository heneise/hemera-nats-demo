# Hemera NATS Demo

This is an example accompanying an article published here:

https://medium.com/heneise/service-to-service-communication-with-hemera-and-nats-d3cbf0727ef8

## Requirements

- Docker Compose

## Setup & Startup

    git clone https://github.com/heneise/hemera-nats-demo.git
    cd hemera-nats-demo
    docker-compose up

## Querying the API

    # Put products into the cart
    curl \
      -XPOST localhost:3000/cart \
      -H "Content-Type: application/json" \
      -d '{"productId":0, "quantity":1}'
    curl \
      -XPOST localhost:3000/cart \
      -H "Content-Type: application/json" \
      -d '{"productId":2, "quantity":5}'
    # Retrieve the cart
    curl localhost:3000

## Thanks

Special thanks to [the team behind NATS](https://github.com/orgs/nats-io/people) and [Dustin Deus](https://github.com/StarpTech), the author of [hemera](https://github.com/hemerajs/hemera).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details