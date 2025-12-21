# 积分技巧核心知识点总结（7.1-7.5）
## 一、7.1 分部积分法（Integration by Parts）
### 1. 核心公式与推导
由乘积求导公式 $\frac{d}{dx}(uv) = u'v + uv'$ 积分变形而来，核心公式：  
$$\int u \, dv = uv - \int v \, du$$  
- 本质：将复杂的 $\int uv' dx$ 转化为简单的 $\int u'v dx$，适用于“乘积型”被积函数（无明显代换结构）。

### 2. $u$ 和 $dv$ 选择策略（LIATE 原则，优先级从高到低）
- $L$（对数函数）：如 $\ln x$、$\log_a x$
- $I$（反三角函数）：如 $\arcsin x$、$\arctan x$
- $A$（代数函数）：如 $x^n$、$ax + b$
- $T$（三角函数）：如 $\sin x$、$\cos x$
- $E$（指数函数）：如 $e^x$、$a^x$  
- 口诀：优先选 $u$ 为 LIATE 靠前的函数，$dv$ 为剩余部分（确保 $v$ 易求、$\int v du$ 更简单）。

### 3. 典型示例
#### （3）循环积分：$\int e^x \sin x dx$
- 需两次分部积分，设 $u = \sin x$（首次），再设 $u = \cos x$（第二次），最终移项求解：  
  $$\int e^x \sin x dx = \frac{1}{2} e^x (\sin x - \cos x) + C$$

#### （2）对数函数积分：$\int \ln x dx$
- 选择：$u = \ln x$（对数函数），$dv = dx$  
- 计算：$du = \frac{1}{x} dx$，$v = x$  
  $$\int \ln x dx = x \ln x - \int x \cdot \frac{1}{x} dx = x \ln x - x + C$$

#### （3）循环积分：$\int e^x \sin x dx$
- 需两次分部积分，设 $u = \sin x$（首次），再设 $u = \cos x$（第二次），最终移项求解：  
  $$\int e^x \sin x dx = \frac{1}{2} e^x (\sin x - \cos x) + C$$

### 4. 注意事项
- 被积函数为单一对数/反三角函数时，$dv = dx$；
- 多项式次数较高时，需多次分部积分（每次降低多项式次数）；
- 循环积分需保留原积分项，移项后合并求解。

## 二、7.2 三角积分（Trigonometric Integrals）
### 1. 核心类型：$\int \sin^m x \cos^n x dx$（$m,n$ 为非负整数）
#### （1）策略：利用三角恒等式 $\sin^2 x + \cos^2 x = 1$ 转化
- 若 $m$ 为奇数（$m=2k+1$）：拆出 $\sin x$ 作 $du$，剩余 $\sin^{2k} x = (1-\cos^2 x)^k$  
  示例：$\int \sin^3 x \cos x dx$  
  $$\int \sin x (1-\cos^2 x) \cos x dx \xlongequal{u=\cos x} -\int (u - u^3) du = \frac{\cos^2 x}{2} - \frac{\cos^4 x}{4} + C$$
- 若 $n$ 为奇数（$n=2k+1$）：拆出 $\cos x$ 作 $du$，剩余 $\cos^{2k} x = (1-\sin^2 x)^k$；
- 若 $m,n$ 均为偶数：用倍角公式降幂（$\sin^2 x = \frac{1-\cos 2x}{2}$，$\cos^2 x = \frac{1+\cos 2x}{2}$）。

### 2. 辅助类型：$\int \tan^m x \sec^n x dx$
- 若 $n$ 为偶数（$n=2k$）：拆出 $\sec^2 x$ 作 $du$（$\sec^2 x dx = d(\tan x)$），剩余 $\sec^{2k-2} x = (1+\tan^2 x)^{k-1}$；
- 若 $m$ 为奇数（$m=2k+1$）：拆出 $\sec x \tan x$ 作 $du$（$\sec x \tan x dx = d(\sec x)$），剩余 $\tan^{2k} x = (\sec^2 x - 1)^k$。

### 3. 关键恒等式
- 平方关系：$\sin^2 x = 1-\cos^2 x$，$\tan^2 x = \sec^2 x - 1$；
- 倍角公式：$\sin 2x = 2\sin x \cos x$，$\cos 2x = 2\cos^2 x - 1 = 1-2\sin^2 x$。

## 三、7.3 三角代换（Trigonometric Substitution）
### 1. 核心目的
通过三角代换消除被积函数中的根号（如 $\sqrt{a^2-x^2}$、$\sqrt{a^2+x^2}$、$\sqrt{x^2-a^2}$），转化为有理三角积分。

### 2. 三大代换类型（$a>0$）
| 根号形式 | 代换公式 | 辅助恒等式 | $dx$ 转换 |
|----------|----------|------------|-----------|
| $\sqrt{a^2 - x^2}$ | $x = a \sin\theta$（$\theta \in [-\frac{\pi}{2}, \frac{\pi}{2}]$） | $1-\sin^2\theta = \cos^2\theta$ | $dx = a \cos\theta d\theta$ |
| $\sqrt{a^2 + x^2}$ | $x = a \tan\theta$（$\theta \in (-\frac{\pi}{2}, \frac{\pi}{2})$） | $1+\tan^2\theta = \sec^2\theta$ | $dx = a \sec^2\theta d\theta$ |
| $\sqrt{x^2 - a^2}$ | $x = a \sec\theta$（$\theta \in [0, \frac{\pi}{2}) \cup (\frac{\pi}{2}, \pi]$） | $\sec^2\theta - 1 = \tan^2\theta$ | $dx = a \sec\theta \tan\theta d\theta$ |

### 3. 典型示例：$\int \frac{1}{\sqrt{4 - x^2}} dx$
- 代换：$x = 2\sin\theta$，$dx = 2\cos\theta d\theta$，$\sqrt{4-x^2} = 2\cos\theta$；
- 计算：$\int \frac{2\cos\theta}{2\cos\theta} d\theta = \int d\theta = \theta + C$；
- 回代：$\theta = \arcsin\frac{x}{2}$，最终结果：$\arcsin\frac{x}{2} + C$。

### 4. 注意事项
- 代换后需用辅助直角三角形回代原变量（避免保留 $\theta$）；
- 定积分需同步转换积分上下限（可省略回代步骤）。

## 四、7.4 有理函数积分（Rational Functions Integration）
### 1. 核心步骤：部分分式分解
有理函数形式：$\frac{P(x)}{Q(x)}$（$P(x),Q(x)$ 为多项式），需先转化为“多项式 + 真分式”（真分式：分子次数 < 分母次数）。

#### （1）预处理：假分式转真分式
若分子次数 ≥ 分母次数，先做多项式除法：$\frac{P(x)}{Q(x)} = 多项式 + \frac{余式}{Q(x)}$  
示例：$\frac{x^3 - 5x + 8}{x^2 + 3x - 28} = x - 3 + \frac{4x - 4}{x^2 + 3x - 28}$。

#### （2）分母因式分解（关键）
将 $Q(x)$ 分解为一次因式、重复一次因式、二次不可约因式（$ax^2+bx+c$，$b^2-4ac<0$）的乘积。

#### （3）部分分式分解规则
| 分母因式类型 | 分解形式 |
|--------------|----------|
| 单一次因式 $(ax + b)$ | $\frac{A}{ax + b}$（$A$ 为常数） |
| 重复一次因式 $(ax + b)^k$ | $\frac{A_1}{ax + b} + \frac{A_2}{(ax + b)^2} + \dots + \frac{A_k}{(ax + b)^k}$ |
| 单二次因式 $ax^2 + bx + c$ | $\frac{Bx + C}{ax^2 + bx + c}$（$B,C$ 为常数） |
| 重复二次因式 $(ax^2 + bx + c)^k$ | $\frac{B_1x + C_1}{ax^2 + bx + c} + \dots + \frac{B_kx + C_k}{(ax^2 + bx + c)^k}$ |

### 2. 示例：$\int \frac{2x + 1}{(x - 1)(x + 2)} dx$
- 分解：设 $\frac{2x + 1}{(x - 1)(x + 2)} = \frac{A}{x - 1} + \frac{B}{x + 2}$，解得 $A=1$，$B=1$；
- 积分：$\int \left( \frac{1}{x - 1} + \frac{1}{x + 2} \right) dx = \ln|x - 1| + \ln|x + 2| + C$。

## 五、7.5 积分策略（Strategy for Integration）
### 1. 优先级流程（从简到繁）
1. **直接积分**：对照基本积分公式（如 $\int x^n dx$、$\int \sin x dx$），无需技巧；
2. **第一类换元（凑微分）**：观察被积函数是否含“复合函数 + 内层导数”（如 $\int e^{2x} dx = \frac{1}{2}\int e^{2x} d(2x)$）；
3. **分部积分**：乘积型函数（无凑微分结构），遵循 LIATE 原则；
4. **三角积分/代换**：含三角函数乘积或根号（$\sqrt{a^2\pm x^2}$、$\sqrt{x^2-a^2}$）；
5. **有理函数积分**：分式形式，按“多项式除法 + 部分分式分解”步骤求解。

### 2. 常见题型快速匹配
| 被积函数特征 | 推荐技巧 |
|--------------|----------|
| 对数/反三角函数（单一形式） | 分部积分（$dv=dx$） |
| 多项式 × 指数/三角函数 | 分部积分（$u$ 选多项式） |
| 含 $\sin^m x \cos^n x$ / $\tan^m x \sec^n x$ | 三角积分（恒等式降幂） |
| 含 $\sqrt{a^2\pm x^2}$ / $\sqrt{x^2-a^2}$ | 三角代换 |
| 分式（分子分母为多项式） | 部分分式分解 |

### 3. 关键提醒
- 灵活组合技巧：如“三角代换 + 分部积分”“换元 + 三角积分”；
- 无法用初等函数表示的积分：如 $\int e^{x^2} dx$、$\int \frac{\sin x}{x} dx$，需保留原积分形式或用数值方法；
- 验证结果：对积分结果求导，需与被积函数一致。