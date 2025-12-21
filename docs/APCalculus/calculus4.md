# 微分应用核心知识点总结
## 一、函数的极值（4.1 Maximum and Minimum Values）
### 1. 极值定义
| 类型 | 定义 | 关键特征 |
|------|------|----------|
| 绝对最大值（Absolute Maximum） | 对定义域$D$内所有$x$，满足$f(c) \geq f(x)$，则$f(c)$为绝对最大值 | 定义域内的最高值 |
| 绝对最小值（Absolute Minimum） | 对定义域$D$内所有$x$，满足$f(c) \leq f(x)$，则$f(c)$为绝对最小值 | 定义域内的最低值 |
| 局部最大值（Local Maximum） | 存在$c$的邻域$U(c, \delta)$，对邻域内所有$x \in U(c, \delta)$，满足$f(c) \geq f(x)$ | 局部范围内的最高值 |
| 局部最小值（Local Minimum） | 存在$c$的邻域$U(c, \delta)$，对邻域内所有$x \in U(c, \delta)$，满足$f(c) \leq f(x)$ | 局部范围内的最低值 |

### 2. 核心定理
- **极值定理（Extreme Value Theorem）**：若$f(x)$在闭区间$[a,b]$上连续，则$\exists \xi_1, \xi_2 \in [a,b]$，使得$f(\xi_1)=\max_{x\in[a,b]}f(x)$，$f(\xi_2)=\min_{x\in[a,b]}f(x)$。
- **费马定理（Fermat’s Theorem）**：若$f(x)$在$x=c$处有局部极值且$f'(c)$存在，则$f'(c)=0$。
  - 反例：$f(x)=x^3$，$f'(0)=3 \cdot 0^2=0$，但$x=0$处无极值；
  - 特例：$f(x)=|x|$，$f'(0)$不存在，但$x=0$是局部最小值。

### 3. 关键概念与方法
- **临界数（Critical Number）**：满足$f'(c)=0$或$f'(c)$不存在的点$c \in D$（$D$为$f(x)$定义域）。
- **闭区间法（Closed Interval Method）**：求连续函数$f(x)$在$[a,b]$上的绝对极值：
  1. 求$(a,b)$内的所有临界数$c_1, c_2, ..., c_n$；
  2. 计算$f(a), f(c_1), f(c_2), ..., f(c_n), f(b)$；
  3. 比较大小：$\max\{f(a), f(c_1), ..., f(b)\}$为绝对最大值，$\min\{f(a), f(c_1), ..., f(b)\}$为绝对最小值。

## 二、中值定理（4.2 The Mean Value Theorem）
### 1. 基础定理
- **罗尔定理（Rolle’s Theorem）**：若$f(x)$满足：
  ① 在$[a,b]$上连续；② 在$(a,b)$内可导；③ $f(a)=f(b)$，
  则$\exists c \in (a,b)$，使得$f'(c)=0$。

- **拉格朗日中值定理（Mean Value Theorem）**：若$f(x)$满足：
  ① 在$[a,b]$上连续；② 在$(a,b)$内可导，
  则$\exists c \in (a,b)$，使得：
  $$f'(c) = \frac{f(b) - f(a)}{b - a}$$
  几何意义：曲线$y=f(x)$在点$(c, f(c))$处的切线与割线$AB$（$A(a,f(a)), B(b,f(b))$）平行。

### 2. 推论与应用
- 推论1：若$\forall x \in (a,b)$，$f'(x)=0$，则$f(x) \equiv C$（$C$为常数，$x \in (a,b)$）。
- 推论2：若$\forall x \in (a,b)$，$f'(x)=g'(x)$，则$f(x)=g(x)+C$（$C$为常数）。
- 物理意义：设$s(t)$为位移函数，则$\exists t_0 \in (t_1, t_2)$，使得瞬时速度$v(t_0)=s'(t_0)=\frac{s(t_2)-s(t_1)}{t_2-t_1}$（平均速度）。

## 三、导数与函数形状（4.3 How Derivatives Affect the Shape of a Graph）
### 1. 函数的单调性
- **增减性测试（I/D Test）**：
  - 若$\forall x \in I$，$f'(x) > 0$，则$f(x)$在$I$上严格递增；
  - 若$\forall x \in I$，$f'(x) < 0$，则$f(x)$在$I$上严格递减。

### 2. 函数的凹凸性
- **凹凸性定义**：
  - 凹函数（Concave Up）：$\forall x_1, x_2 \in I$，$\forall \lambda \in (0,1)$，有$f(\lambda x_1 + (1-\lambda)x_2) < \lambda f(x_1) + (1-\lambda)f(x_2)$，且$f''(x) > 0$；
  - 凸函数（Concave Down）：$\forall x_1, x_2 \in I$，$\forall \lambda \in (0,1)$，有$f(\lambda x_1 + (1-\lambda)x_2) > \lambda f(x_1) + (1-\lambda)f(x_2)$，且$f''(x) < 0$。
- **拐点（Inflection Point）**：点$(c, f(c))$为拐点，当且仅当$f''(c)=0$（或$f''(c)$不存在），且$f''(x)$在$x=c$两侧符号改变。

### 3. 极值的判定方法
- **第一导数测试（First Derivative Test）**：
  设$c$为$f(x)$的临界数，$f(x)$在$c$处连续：
  - 若$f'(x)$在$c$左侧正、右侧负，则$f(c)$为局部最大值；
  - 若$f'(x)$在$c$左侧负、右侧正，则$f(c)$为局部最小值；
  - 若$f'(x)$在$c$两侧符号不变，则$f(c)$非极值。

- **第二导数测试（Second Derivative Test）**：
  若$f'(c)=0$且$f''(c)$存在：
  - 若$f''(c) > 0$，则$f(c)$为局部最小值（$f''(c)=\lim\limits_{x \to c}\frac{f'(x)-f'(c)}{x-c}=\lim\limits_{x \to c}\frac{f'(x)}{x-c} > 0$，$f'(x)$左负右正）；
  - 若$f''(c) < 0$，则$f(c)$为局部最大值；
  - 若$f''(c)=0$，测试失效（如$f(x)=x^4$，$f''(0)=0$，$x=0$是最小值；$f(x)=x^3$，$f''(0)=0$，$x=0$无极值）。

## 四、曲线绘制指南（4.5 Summary of Curve Sketching）
### 绘制曲线$y=f(x)$的步骤
1. **定义域（Domain）**：确定$D(f)=\{x \mid f(x) \text{有定义}\}$；
2. **截距（Intercepts）**：
   - $y$截距：$x=0$时，$y=f(0)$（若$0 \in D(f)$）；
   - $x$截距：解方程$f(x)=0$（求实根）；
3. **对称性（Symmetry）**：
   - 偶函数：$f(-x)=f(x)$，关于$y$轴对称；
   - 奇函数：$f(-x)=-f(x)$，关于原点对称；
   - 周期函数：$\exists T>0$，$f(x+T)=f(x)$，周期为$T$；
4. **渐近线（Asymptotes）**：
   - 水平渐近线：若$\lim\limits_{x \to +\infty}f(x)=L_1$或$\lim\limits_{x \to -\infty}f(x)=L_2$，则$y=L_1/y=L_2$为水平渐近线；
   - 垂直渐近线：若$\lim\limits_{x \to a^+}f(x)=\pm\infty$或$\lim\limits_{x \to a^-}f(x)=\pm\infty$，则$x=a$为垂直渐近线；
   - 斜渐近线：若$\lim\limits_{x \to \pm\infty}\frac{f(x)}{x}=m \neq 0$，且$\lim\limits_{x \to \pm\infty}[f(x)-mx]=b$，则$y=mx+b$为斜渐近线；
5. **单调性与极值**：求$f'(x)$，确定临界数，用第一/第二导数测试找单调区间和极值；
6. **凹凸性与拐点**：求$f''(x)$，确定$f''(x)=0$的点，判断凹凸区间和拐点；
7. **绘制曲线**：标注渐近线（虚线）、截距、极值点$(c, f(c))$、拐点$(x_0, f(x_0))$，按单调性/凹凸性连接。

## 五、常见题型与解题要点
1. **求函数极值**：
   例：求$f(x)=x^3-3x^2+1$在$[-1,3]$上的极值。
   解：$f'(x)=3x^2-6x=3x(x-2)$，临界数$x=0,2$；
   $f''(x)=6x-6$，$f''(0)=-6<0$（$x=0$为极大值点，$f(0)=1$）；
   $f''(2)=6>0$（$x=2$为极小值点，$f(2)=-3$）；
   端点值$f(-1)=-3$，$f(3)=1$；
   绝对最大值为$1$（$x=0/3$），绝对最小值为$-3$（$x=-1/2$）。

2. **证明不等式**：
   例：证明当$x>0$时，$x - \frac{x^2}{2} < \ln(1+x) < x$。
   证：构造$f(x)=\ln(1+x)-x+\frac{x^2}{2}$，$f'(x)=\frac{1}{1+x}-1+x=\frac{x^2}{1+x}>0$（$x>0$），
   $f(0)=0$，故$f(x)>0$（$x>0$），即$\ln(1+x) > x - \frac{x^2}{2}$；
   构造$g(x)=x-\ln(1+x)$，$g'(x)=1-\frac{1}{1+x}=\frac{x}{1+x}>0$（$x>0$），
   $g(0)=0$，故$g(x)>0$（$x>0$），即$\ln(1+x) < x$。

3. **方程根的个数判断**：
   例：判断$x^3-3x+1=0$的实根个数。
   解：$f(x)=x^3-3x+1$，$f'(x)=3x^2-3=3(x-1)(x+1)$；
   极值：$f(-1)=3$（极大值），$f(1)=-1$（极小值）；
   $\lim\limits_{x \to -\infty}f(x)=-\infty$，$\lim\limits_{x \to +\infty}f(x)=+\infty$，
   故方程有3个实根（分别在$(-\infty,-1)$、$(-1,1)$、$(1,+\infty)$内）。

4. **实际应用**：
   例：求周长为$L$的矩形的最大面积。
   解：设长为$x$，宽为$\frac{L}{2}-x$，面积$S(x)=x(\frac{L}{2}-x)=-\frac{1}{2}x^2+\frac{L}{2}x$；
   $S'(x)=-x+\frac{L}{2}$，临界数$x=\frac{L}{4}$；
   $S''(x)=-1<0$，故$x=\frac{L}{4}$时面积最大，$S_{\text{max}}=\frac{L^2}{16}$（正方形）。

## 六、核心公式速记
1. 拉格朗日中值定理：$f'(c) = \frac{f(b)-f(a)}{b-a} \quad (a < c < b)$
2. 临界数判定：$f'(c)=0$ 或 $f'(c)$ 不存在（$c \in D(f)$）
3. 凹凸性判定：
   - 凹函数：$f''(x) > 0 \quad (x \in I)$
   - 凸函数：$f''(x) < 0 \quad (x \in I)$
4. 斜渐近线公式：
   $$m=\lim\limits_{x \to \pm\infty}\frac{f(x)}{x}, \quad b=\lim\limits_{x \to \pm\infty}[f(x)-mx]$$
5. 闭区间极值：$\max/\min\{f(a), f(c_1), f(c_2), ..., f(b)\}$