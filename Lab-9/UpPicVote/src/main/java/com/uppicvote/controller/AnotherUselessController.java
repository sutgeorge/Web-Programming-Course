package com.uppicvote.controller;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

public class AnotherUselessController extends HttpServlet {
    public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        PrintWriter printWriter = new PrintWriter(response.getOutputStream());
        printWriter.println("<h1>Hello from the AnotherUselessController!</h1>");
        printWriter.flush();
    }
}
