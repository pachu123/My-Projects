package Queue;

import javax.swing.*;
import java.awt.*;
import static java.awt.Font.BOLD;
import java.awt.event.*;

public class Queue extends JFrame implements ActionListener {

    JLabel welcom, L2, L3, L4, L5, L6, L7;
    Font fnt, fnt1, fnt2;
    JButton entr;
    JTextField T1;
    JScrollPane p;
    JPanel p1;
    public static String N1;

    public Queue() {
        super("Graphical Representation of Queues");

        setDefaultCloseOperation(EXIT_ON_CLOSE);
        setLocation(150, 100);
        this.setExtendedState(this.MAXIMIZED_BOTH);

        welcom = new JLabel("WELCOME TO GRAPHICAL REPRESENTATION OF QUEUE");
        L2 = new JLabel("ENTER HOW MANY ELEMENTS YOU WANT TO INSERT AND THEN PRESS ENTER");
        //L3=new JLabel("Prashanth\nT");
        Font fnt = new Font("Arial", Font.ITALIC, 30);
        JButton entr = new JButton("ENTER");
        welcom.setFont(fnt);
        L2.setFont(fnt);
        welcom.setForeground(Color.BLUE);

        welcom.setBounds(250, 100, 1500, 100);
        L2.setBounds(100, 200, 1500, 100);
        L2.setForeground(Color.blue);
        L4 = new JLabel("Develeoped By :");
        L5 = new JLabel("* Prashanth");
        L6 = new JLabel("* Karthik");
        L7 = new JLabel("* Trivarna");
        L4.setBounds(1000, 200, 500, 500);
        L5.setBounds(1080, 230, 500, 500);
        L6.setBounds(1080, 260, 500, 500);
        L7.setBounds(1080, 290, 500, 500);

        Font fnt1 = new Font("Arial", Font.BOLD, 20);
        Font fnt2 = new Font("Arial", Font.BOLD, 15);
        L4.setFont(fnt1);
        L4.setForeground(Color.blue);
        L5.setFont(fnt2);
        L5.setForeground(Color.blue);
        L6.setFont(fnt2);
        L6.setForeground(Color.blue);
        L7.setFont(fnt2);
        L7.setForeground(Color.blue);
        T1 = new JTextField(1000);
        T1.setBounds(500, 400, 100, 50);
        getContentPane().add(welcom);
        getContentPane().add(L2);
        getContentPane().add(L4);
        getContentPane().add(L5);
        getContentPane().add(L6);
        getContentPane().add(L7);

        getContentPane().add(T1);

        entr.addActionListener(this);
        entr.setBounds(600, 400, 100, 50);

        getContentPane().add(entr);
        getContentPane().setBackground(Color.LIGHT_GRAY);
        setLayout(null);

    }

    public void actionPerformed(ActionEvent e) {
        if (e.getActionCommand().equals("ENTER")) {
            N1 = T1.getText();
            if (T1.getText().equals("")) {
                JOptionPane.showMessageDialog(null, "Please Enter How Many Elements You Want to Insert");
            } else {
                setVisible(false);
                LQueue obj = new LQueue();
            }

        }
    }

    public static void main(String[] args) {

        Queue Q = new Queue();
        Q.setSize(950, 400);
        Q.setVisible(true);
        //new Queue();
    }
}

class LQueue extends JFrame {

    LQueue() {
        super("Graphical Representation of Queue");

        setSize(900, 500);
        setDefaultCloseOperation(EXIT_ON_CLOSE);
        //setLayout(null);
        this.setExtendedState(this.MAXIMIZED_BOTH);
        this.setBackground(Color.LIGHT_GRAY);
        JScrollPane jscrlPane = new JScrollPane(new MyPanel());
        jscrlPane.setBounds(0, 0, 5000, 1000);

        jscrlPane.setHorizontalScrollBarPolicy(JScrollPane.HORIZONTAL_SCROLLBAR_ALWAYS);
        jscrlPane.setVerticalScrollBarPolicy(JScrollPane.VERTICAL_SCROLLBAR_ALWAYS);

        //adding that scroll pane to the frame.
        getContentPane().add(jscrlPane);
        setVisible(true);

    }//end of constructor
}//end of paint_window class

class MyPanel extends JPanel implements ActionListener {

    JTextField t11 = new JTextField();
    int i = 1, x;
    JTextField T[] = new JTextField[1000];
    JLabel L[] = new JLabel[1000];
    JLabel EL1 = new JLabel();
    JLabel EL2 = new JLabel();
    JButton Add = new JButton("ADD");
    JButton Full = new JButton("IsFull");
    JButton Empty = new JButton("IsEmpty");
    JButton Del = new JButton("DELETE");
    Font fnt = new Font("Times New Roman", BOLD, 20);
    JLabel Qu = new JLabel("GRAPHICAL REPRESENTATION OF QUEUE");
    String str[] = new String[10];
    String s, s1;
    public static String N;
    int n, front = 0, rear = 0;
    Font fnt1;

    MyPanel() {
        setLayout(null);
        setOpaque(true);

        Font fnt1 = new Font("Times New Roman", Font.BOLD, 30);
        Qu.setFont(fnt1);
        Qu.setBounds(300, 10, 800, 100);
        Qu.setForeground(Color.MAGENTA);
        this.add(Qu);

        N = Queue.N1;//value of static variable of main class

        n = Integer.parseInt(N);

        for (i = 1; i <= n; i++) {
            T[i] = new JTextField();
        }

        x = 100;
        for (i = 1; i <= n; i++) {
            T[i].setBounds(x, 170, 80, 50);
            x = x + 80;
        }

        for (i = 1; i <= n; i++) {
            this.add(T[i]);
        }

        for (int i = 1; i <= n; i++) {
            T[i].setEditable(false);
        }
        ImageIcon imageIcon1 = new ImageIcon("C:\\Users\\Venkatesh Bhat\\Pictures\\arrow3.jpg");
        ImageIcon imageIcon2 = new ImageIcon("C:\\Users\\Venkatesh Bhat\\Pictures\\arrow.jpg");

        EL1 = new JLabel(imageIcon1);
        EL2 = new JLabel(imageIcon2);
        EL1.setBounds(10, 75, 100, 100);
        EL2.setBounds(10, 215, 100, 100);
        this.add(EL1);
        this.add(EL2);

        for (i = 1; i <= n; i++) {
            L[i] = new JLabel(imageIcon1);
        }

        for (i = n + 1; i <= n + n; i++) {
            L[i] = new JLabel(imageIcon2);
        }

        x = 87;
        for (i = 1; i <= n; i++) {
            L[i].setBounds(x, 80, 100, 100);
            x = x + 80;
        }

        x = 87;
        for (i = n + 1; i <= n + n; i++) {
            L[i].setBounds(x, 210, 100, 100);
            x = x + 80;
        }

        for (i = 1; i <= n + n; i++) {
            this.add(L[i]);
        }

        for (i = 1; i <= n + n; i++) {

            L[i].setVisible(false);
        }

        t11.setBounds(230, 320, 150, 40);
        this.add(t11);
        t11.requestFocusInWindow();
        t11.setToolTipText("Enter The Number To Insert");

        Add.setBounds(375, 320, 140, 40);
        this.add(Add);

        Del.setBounds(560, 320, 150, 40);
        this.add(Del);
        Del.setEnabled(false);
        Full.setBounds(760, 320, 150, 40);
        this.add(Full);
        Empty.setBounds(960, 320, 150, 40);
        this.add(Empty);

        Add.addActionListener(this);
        Del.addActionListener(this);
        Full.addActionListener(this);
        Empty.addActionListener(this);

    }//end of constructor

    @Override
    public void actionPerformed(ActionEvent e) {

        if (e.getSource() == Full) {
            if (rear == n) {
                JOptionPane.showMessageDialog(null, "Yes,Queue is Full");
            } else {
                JOptionPane.showMessageDialog(null, "No,Queue is Not Full");
            }
        }
        if (e.getSource() == Empty) {
            if (rear == 0) {
                JOptionPane.showMessageDialog(null, "Yes,Queue is Empty");
            } else {
                JOptionPane.showMessageDialog(null, "No,Queue is Not Empty");
            }
        }

        if (e.getSource() == Add) {
            Del.setEnabled(true);
            if (t11.getText().equals("")) {
                JOptionPane.showMessageDialog(null, "Please Enter the Element to Insert");
            } else if (rear == n) {
                JOptionPane.showMessageDialog(null, "Queue Is Full Insertion Not Possible");
                t11.setText(null);
            } else {
                rear++;
                T[rear].setText(t11.getText());
                t11.setText(null);
                EL1.setVisible(false);
                EL2.setVisible(false);
                if (rear == 1) {
                    L[rear].setVisible(true);
                    L[rear + n].setVisible(true);
                } else {
                    L[rear + n].setVisible(true);
                    L[rear + n - 1].setVisible(false);
                }
            }

        }

        if (e.getSource() == Del) {
            front++;
            if (rear == front) {
                s = T[front].getText();
                JOptionPane.showMessageDialog(null, "Deleted Element is:" + s);

                T[front].setText("");
                L[front].setVisible(false);
                L[n + rear].setVisible(false);
                EL1.setVisible(true);
                EL2.setVisible(true);
                front = 0;
                rear = 0;

            } else if (rear > 1) {
                s = T[front].getText();
                T[front].setText("");
                JOptionPane.showMessageDialog(null, "Deleted Element is:" + s);
                L[front].setVisible(false);
                L[front + 1].setVisible(true);
            } else {
                JOptionPane.showMessageDialog(null, "Queue is Empty");
            }

            /*if (rear == 0) {
             L[rear + 2].setVisible(true);
             L[1].setVisible(true);
             }*/
        }

    }//end of Action Performed

    @Override
    public Dimension getPreferredSize() {
        return new Dimension(5000, 1000);
    }
}//end of MyPanel Class

