<?php 
    include "model.php";
    include "view.php";

    class Controller {
        private $model;
        private $view;        

        public function __construct() {
            $this->model = new Model();
            $this->view = new View();
        }

        public function getParameters() {
            if (isset($_GET["requestedAction"]) && !empty($_GET["requestedAction"])) {
                switch ($_GET["requestedAction"]) {
                    case "getUserByRole":
                        $this->{$_GET["requestedAction"]}($_GET["role"]); break;
                    case "getUserByName":
                        $this->{$_GET["requestedAction"]}($_GET["name"]); break;
                    case "addUser":
                        $this->{$_GET["requestedAction"]}($_GET["name"], $_GET["username"], $_GET["password"], $_GET["dateOfBirth"], $_GET["role"], $_GET["email"]); break;
                }
            }
        }

        public function getUserByRole($role) {
            $user = $this->model->getUserByRole($role);
            return $this->view->displayUser($user);
        }

        public function getUserByName($name) {
            $user = $this->model->getUserByName($name);
            return $this->view->displayUser($user);
        }

        public function addUser($name, $username, $password, $dateOfBirth, $role, $email)  {
            $user = new User($name, $username, $password, $dateOfBirth, $role, $email);
            $this->model->insertUser($user);
        }
    }

    $controller = new Controller();
    $controller->getParameters();
?>