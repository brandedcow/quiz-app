export const sample_results = [
  {
    question:
      "How to list all the docker containers are running with container details.",
    isCorrect: false,
    selectedAnswer: {
      answer_a_correct: "false",
      answer_b_correct: "false",
      answer_c_correct: "true",
      answer_d_correct: "false",
      answer_e_correct: "false",
      answer_f_correct: "false",
    },
    correctAnswers: {
      answer_a_correct: "false",
      answer_b_correct: "true",
      answer_c_correct: "false",
      answer_d_correct: "false",
      answer_e_correct: "false",
      answer_f_correct: "false",
    },
    options: [
      {
        key: "answer_a",
        value: "$ docker ls",
      },
      {
        key: "answer_b",
        value: "$ docker ps",
      },
      {
        key: "answer_c",
        value: "$ docker details",
      },
      {
        key: "answer_d",
        value: null,
      },
      {
        key: "answer_e",
        value: null,
      },
      {
        key: "answer_f",
        value: null,
      },
    ],
  },
  {
    question:
      "Is it better to directly remove the container using the rm command or stop the container followed by remove container?",
    isCorrect: true,
    selectedAnswer: {
      answer_a_correct: "false",
      answer_b_correct: "true",
      answer_c_correct: "false",
      answer_d_correct: "false",
      answer_e_correct: "false",
      answer_f_correct: "false",
    },
    correctAnswers: {
      answer_a_correct: "false",
      answer_b_correct: "true",
      answer_c_correct: "false",
      answer_d_correct: "false",
      answer_e_correct: "false",
      answer_f_correct: "false",
    },
    options: [
      {
        key: "answer_a",
        value:
          "No. Its not always better to stop the container and then remove it using the remove command.",
      },
      {
        key: "answer_b",
        value:
          "Its always better to stop the container and then remove it using the remove command.",
      },
      {
        key: "answer_c",
        value: null,
      },
      {
        key: "answer_d",
        value: null,
      },
      {
        key: "answer_e",
        value: null,
      },
      {
        key: "answer_f",
        value: null,
      },
    ],
  },
  {
    question:
      "How do you create a new Docker image and store it on the local system?",
    isCorrect: true,
    selectedAnswer: {
      answer_a_correct: "false",
      answer_b_correct: "false",
      answer_c_correct: "true",
      answer_d_correct: "false",
      answer_e_correct: "false",
      answer_f_correct: "false",
    },
    correctAnswers: {
      answer_a_correct: "false",
      answer_b_correct: "false",
      answer_c_correct: "true",
      answer_d_correct: "false",
      answer_e_correct: "false",
      answer_f_correct: "false",
    },
    options: [
      {
        key: "answer_a",
        value: "docker add <conatainer id> <username/imagename>",
      },
      {
        key: "answer_b",
        value: "docker --commit <conatainer id> <username/imagename>",
      },
      {
        key: "answer_c",
        value: "docker commit <conatainer id> <username/imagename>",
      },
      {
        key: "answer_d",
        value: null,
      },
      {
        key: "answer_e",
        value: null,
      },
      {
        key: "answer_f",
        value: null,
      },
    ],
  },
  {
    question: "Which is not true about Docker Hub?",
    isCorrect: true,
    selectedAnswer: {
      answer_a_correct: "false",
      answer_b_correct: "false",
      answer_c_correct: "true",
      answer_d_correct: "false",
      answer_e_correct: "false",
      answer_f_correct: "false",
    },
    correctAnswers: {
      answer_a_correct: "false",
      answer_b_correct: "false",
      answer_c_correct: "true",
      answer_d_correct: "false",
      answer_e_correct: "false",
      answer_f_correct: "false",
    },
    options: [
      {
        key: "answer_a",
        value:
          "Docker Hub is the world's largest library and community for container images",
      },
      {
        key: "answer_b",
        value:
          "Docker Hub provides an easy way to create, manage, and deliver your teams' container applications",
      },
      {
        key: "answer_c",
        value: "Docker Hub is a totally private repository",
      },
      {
        key: "answer_d",
        value: null,
      },
      {
        key: "answer_e",
        value: null,
      },
      {
        key: "answer_f",
        value: null,
      },
    ],
  },
  {
    question: "How to list all of your services in Docker swarm?",
    isCorrect: false,
    selectedAnswer: {
      answer_a_correct: "false",
      answer_b_correct: "false",
      answer_c_correct: "false",
      answer_d_correct: "true",
      answer_e_correct: "false",
      answer_f_correct: "false",
    },
    correctAnswers: {
      answer_a_correct: "false",
      answer_b_correct: "true",
      answer_c_correct: "false",
      answer_d_correct: "false",
      answer_e_correct: "false",
      answer_f_correct: "false",
    },
    options: [
      {
        key: "answer_a",
        value: "docker ls service",
      },
      {
        key: "answer_b",
        value: "docker service ls",
      },
      {
        key: "answer_c",
        value: "docker service ps",
      },
      {
        key: "answer_d",
        value: "docker get service",
      },
      {
        key: "answer_e",
        value: null,
      },
      {
        key: "answer_f",
        value: null,
      },
    ],
  },
  {
    question: "What Is K8s?",
    isCorrect: true,
    selectedAnswer: {
      answer_a_correct: "false",
      answer_b_correct: "true",
      answer_c_correct: "false",
      answer_d_correct: "false",
      answer_e_correct: "false",
      answer_f_correct: "false",
    },
    correctAnswers: {
      answer_a_correct: "false",
      answer_b_correct: "true",
      answer_c_correct: "false",
      answer_d_correct: "false",
      answer_e_correct: "false",
      answer_f_correct: "false",
    },
    options: [
      {
        key: "answer_a",
        value:
          "Kubernetes, also sometimes called K8S (K – eight characters – S), is an open source backend framework for containerized applications that was born from the Azure data centers.",
      },
      {
        key: "answer_b",
        value:
          "Kubernetes, also sometimes called K8S (K – eight characters – S), is an open source orchestration framework for containerized applications that was born from the Google data centers.",
      },
      {
        key: "answer_c",
        value: null,
      },
      {
        key: "answer_d",
        value: null,
      },
      {
        key: "answer_e",
        value: null,
      },
      {
        key: "answer_f",
        value: null,
      },
    ],
  },
  {
    question:
      "Containers running on a single machine all share the same operating system kernel.",
    isCorrect: true,
    selectedAnswer: {
      answer_a_correct: "false",
      answer_b_correct: "true",
      answer_c_correct: "false",
      answer_d_correct: "false",
      answer_e_correct: "false",
      answer_f_correct: "false",
    },
    correctAnswers: {
      answer_a_correct: "false",
      answer_b_correct: "true",
      answer_c_correct: "false",
      answer_d_correct: "false",
      answer_e_correct: "false",
      answer_f_correct: "false",
    },
    options: [
      {
        key: "answer_a",
        value: "False",
      },
      {
        key: "answer_b",
        value: "True",
      },
      {
        key: "answer_c",
        value: null,
      },
      {
        key: "answer_d",
        value: null,
      },
      {
        key: "answer_e",
        value: null,
      },
      {
        key: "answer_f",
        value: null,
      },
    ],
  },
  {
    question: "Which of the following are features of Kubernetes?",
    isCorrect: false,
    selectedAnswer: {
      answer_a_correct: "false",
      answer_b_correct: "false",
      answer_c_correct: "false",
      answer_d_correct: "true",
      answer_e_correct: "false",
      answer_f_correct: "false",
    },
    correctAnswers: {
      answer_a_correct: "true",
      answer_b_correct: "false",
      answer_c_correct: "true",
      answer_d_correct: "true",
      answer_e_correct: "false",
      answer_f_correct: "false",
    },
    options: [
      {
        key: "answer_a",
        value: "Self-healing",
      },
      {
        key: "answer_b",
        value: "Kubernetes Swarm",
      },
      {
        key: "answer_c",
        value: "Secrets and configuration management",
      },
      {
        key: "answer_d",
        value: "Batch execution",
      },
      {
        key: "answer_e",
        value: null,
      },
      {
        key: "answer_f",
        value: null,
      },
    ],
  },
  {
    question: "How do you create a docker container from an image?",
    isCorrect: false,
    selectedAnswer: {
      answer_a_correct: "false",
      answer_b_correct: "false",
      answer_c_correct: "true",
      answer_d_correct: "false",
      answer_e_correct: "false",
      answer_f_correct: "false",
    },
    correctAnswers: {
      answer_a_correct: "true",
      answer_b_correct: "false",
      answer_c_correct: "false",
      answer_d_correct: "false",
      answer_e_correct: "false",
      answer_f_correct: "false",
    },
    options: [
      {
        key: "answer_a",
        value: "docker run -it -d <image_name>",
      },
      {
        key: "answer_b",
        value: "docker --run -it -d <image_name>",
      },
      {
        key: "answer_c",
        value: "docker run it d <image_name>",
      },
      {
        key: "answer_d",
        value: null,
      },
      {
        key: "answer_e",
        value: null,
      },
      {
        key: "answer_f",
        value: null,
      },
    ],
  },
  {
    question: "How to start a container?",
    isCorrect: true,
    selectedAnswer: {
      answer_a_correct: "false",
      answer_b_correct: "false",
      answer_c_correct: "true",
      answer_d_correct: "false",
      answer_e_correct: "false",
      answer_f_correct: "false",
    },
    correctAnswers: {
      answer_a_correct: "false",
      answer_b_correct: "false",
      answer_c_correct: "true",
      answer_d_correct: "false",
      answer_e_correct: "false",
      answer_f_correct: "false",
    },
    options: [
      {
        key: "answer_a",
        value: "$ docker push <container_id>",
      },
      {
        key: "answer_b",
        value: "$ docker -->start <container_id>",
      },
      {
        key: "answer_c",
        value: "$ docker start <container_id>",
      },
      {
        key: "answer_d",
        value: null,
      },
      {
        key: "answer_e",
        value: null,
      },
      {
        key: "answer_f",
        value: null,
      },
    ],
  },
];
