**fw\_tools\_2.0\_rev01**

https://fwtools2rev001.netlify.app/



**Project URL:**

https://azlgjkjzitbolyfyyaip.supabase.co





**anon public:**



eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF6bGdqa2p6aXRib2x5Znl5YWlwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjY0MTQ1NjcsImV4cCI6MjA4MTk5MDU2N30.PefjFNb5Phq2ZkR26-RlJdb-pnFUbYp1PxjYwI1LUpA





**Lista Completa de Usuários do Sistema**

👥 Usuários Cadastrados

**1. Fábio Mendes - Nível DEV (Acesso Total)**

Login: fabio@fwcompany.com.br



Senha: FabioFW123@



Perfil: dev



Permissões: Acesso total a todas as funcionalidades



Acessos: Dashboard, Cadastro, Catálogo, Exportar, Banco de Dados



**2. Emerson Silva - Nível Almoxarife**

Login: emerson.silva@fwcompany.com.br



Senha: EmersonFW1@



Perfil: almoxarife



Permissões: Acesso parcial (sem configuração de banco)



Acessos: Dashboard, Cadastro, Catálogo, Exportar



Configuração Supabase: Já pré-configurada



**3. Usuário Genérico - Nível Básico**

Login: fwuser



Senha: User123



Perfil: user



Permissões: Apenas consulta



Acessos: Dashboard, Catálogo (somente visualização), Exportar



**4. Raquel - Nível Genérico (Novo)**

Login: raquel@fwcompany.com.br



Senha: RaqueL1234



Perfil: user



Permissões: Apenas consulta



Acessos: Dashboard, Catálogo (somente visualização), Exportar







<!DOCTYPE html>

<html lang="pt-BR">

<head>

&nbsp;   <meta charset="UTF-8">

&nbsp;   <meta name="viewport" content="width=device-width, initial-scale=1.0">

&nbsp;   <title>Sistema de Ferramentas - Login</title>

&nbsp;   <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

&nbsp;   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

&nbsp;   <script src="https://cdn.jsdelivr.net/npm/xlsx@0.18.5/dist/xlsx.full.min.js"></script>

&nbsp;   <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>

&nbsp;   <script src="https://cdn.jsdelivr.net/npm/qrcode@1.5.3/build/qrcode.min.js"></script>

&nbsp;   <style>

&nbsp;       :root {

&nbsp;           --primary-color: #2c3e50;

&nbsp;           --secondary-color: #3498db;

&nbsp;           --accent-color: #2980b9;

&nbsp;           --light-color: #ecf0f1;

&nbsp;           --success-color: #27ae60;

&nbsp;           --warning-color: #f39c12;

&nbsp;           --danger-color: #e74c3c;

&nbsp;           --gray-color: #95a5a6;

&nbsp;           --text-color: #2c3e50;

&nbsp;           --border-color: #bdc3c7;

&nbsp;       }

&nbsp;       

&nbsp;       \* {

&nbsp;           margin: 0;

&nbsp;           padding: 0;

&nbsp;           box-sizing: border-box;

&nbsp;           font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

&nbsp;       }

&nbsp;       

&nbsp;       body {

&nbsp;           background-color: #f5f7fa;

&nbsp;           color: var(--text-color);

&nbsp;           line-height: 1.6;

&nbsp;           min-height: 100vh;

&nbsp;           display: flex;

&nbsp;           flex-direction: column;

&nbsp;       }

&nbsp;       

&nbsp;       /\* Login Container \*/

&nbsp;       .login-container {

&nbsp;           display: flex;

&nbsp;           flex-direction: column;

&nbsp;           align-items: center;

&nbsp;           justify-content: center;

&nbsp;           min-height: 100vh;

&nbsp;           padding: 20px;

&nbsp;           background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

&nbsp;       }

&nbsp;       

&nbsp;       .login-box {

&nbsp;           background: linear-gradient(135deg, var(--primary-color), var(--accent-color));

&nbsp;           border-radius: 20px;

&nbsp;           padding: 40px;

&nbsp;           width: 100%;

&nbsp;           max-width: 500px;

&nbsp;           box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);

&nbsp;           color: white;

&nbsp;           position: relative;

&nbsp;           overflow: hidden;

&nbsp;       }

&nbsp;       

&nbsp;       .login-box::before {

&nbsp;           content: '';

&nbsp;           position: absolute;

&nbsp;           top: -50%;

&nbsp;           right: -50%;

&nbsp;           width: 100%;

&nbsp;           height: 200%;

&nbsp;           background: rgba(255, 255, 255, 0.1);

&nbsp;           transform: rotate(25deg);

&nbsp;       }

&nbsp;       

&nbsp;       .login-header {

&nbsp;           text-align: center;

&nbsp;           margin-bottom: 40px;

&nbsp;           position: relative;

&nbsp;           z-index: 1;

&nbsp;       }

&nbsp;       

&nbsp;       .login-logo-fw {

&nbsp;           width: 180px;

&nbsp;           margin: 0 auto 20px;

&nbsp;       }

&nbsp;       

&nbsp;       .login-logo-fw img {

&nbsp;           width: 100%;

&nbsp;           height: auto;

&nbsp;       }

&nbsp;       

&nbsp;       .login-title {

&nbsp;           font-size: 32px;

&nbsp;           font-weight: 700;

&nbsp;           margin-bottom: 10px;

&nbsp;       }

&nbsp;       

&nbsp;       .login-subtitle {

&nbsp;           font-size: 16px;

&nbsp;           opacity: 0.9;

&nbsp;       }

&nbsp;       

&nbsp;       .login-form {

&nbsp;           position: relative;

&nbsp;           z-index: 1;

&nbsp;       }

&nbsp;       

&nbsp;       .form-group {

&nbsp;           margin-bottom: 25px;

&nbsp;       }

&nbsp;       

&nbsp;       .form-group label {

&nbsp;           display: block;

&nbsp;           margin-bottom: 8px;

&nbsp;           font-weight: 500;

&nbsp;           color: white;

&nbsp;       }

&nbsp;       

&nbsp;       .form-group input {

&nbsp;           width: 100%;

&nbsp;           padding: 15px;

&nbsp;           border: 2px solid rgba(255, 255, 255, 0.2);

&nbsp;           border-radius: 10px;

&nbsp;           background: rgba(255, 255, 255, 0.1);

&nbsp;           color: white;

&nbsp;           font-size: 16px;

&nbsp;           transition: all 0.3s ease;

&nbsp;       }

&nbsp;       

&nbsp;       .form-group input::placeholder {

&nbsp;           color: rgba(255, 255, 255, 0.7);

&nbsp;       }

&nbsp;       

&nbsp;       .form-group input:focus {

&nbsp;           outline: none;

&nbsp;           border-color: white;

&nbsp;           background: rgba(255, 255, 255, 0.2);

&nbsp;       }

&nbsp;       

&nbsp;       .form-group input.error {

&nbsp;           border-color: var(--danger-color);

&nbsp;       }

&nbsp;       

&nbsp;       .login-btn {

&nbsp;           width: 100%;

&nbsp;           padding: 16px;

&nbsp;           background-color: white;

&nbsp;           color: var(--primary-color);

&nbsp;           border: none;

&nbsp;           border-radius: 10px;

&nbsp;           font-size: 18px;

&nbsp;           font-weight: 600;

&nbsp;           cursor: pointer;

&nbsp;           transition: all 0.3s ease;

&nbsp;           margin-top: 10px;

&nbsp;           display: flex;

&nbsp;           align-items: center;

&nbsp;           justify-content: center;

&nbsp;           gap: 10px;

&nbsp;       }

&nbsp;       

&nbsp;       .login-btn:hover {

&nbsp;           background-color: var(--light-color);

&nbsp;           transform: translateY(-2px);

&nbsp;           box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);

&nbsp;       }

&nbsp;       

&nbsp;       .login-footer {

&nbsp;           display: flex;

&nbsp;           justify-content: space-between;

&nbsp;           align-items: center;

&nbsp;           margin-top: 30px;

&nbsp;           position: relative;

&nbsp;           z-index: 1;

&nbsp;       }

&nbsp;       

&nbsp;       .login-logo-delservin {

&nbsp;           width: 120px;

&nbsp;       }

&nbsp;       

&nbsp;       .login-logo-altercon {

&nbsp;           width: 90px;

&nbsp;       }

&nbsp;       

&nbsp;       .login-footer img {

&nbsp;           width: 100%;

&nbsp;           height: auto;

&nbsp;       }

&nbsp;       

&nbsp;       .login-error {

&nbsp;           background-color: rgba(231, 76, 60, 0.2);

&nbsp;           border: 1px solid var(--danger-color);

&nbsp;           color: white;

&nbsp;           padding: 12px;

&nbsp;           border-radius: 8px;

&nbsp;           margin-bottom: 20px;

&nbsp;           display: none;

&nbsp;           position: relative;

&nbsp;           z-index: 1;

&nbsp;       }

&nbsp;       

&nbsp;       .login-error.show {

&nbsp;           display: block;

&nbsp;       }

&nbsp;       

&nbsp;       .user-badge {

&nbsp;           display: inline-block;

&nbsp;           padding: 4px 12px;

&nbsp;           background-color: rgba(255, 255, 255, 0.2);

&nbsp;           border-radius: 20px;

&nbsp;           font-size: 14px;

&nbsp;           margin-top: 5px;

&nbsp;       }

&nbsp;       

&nbsp;       /\* Dashboard Container (mantendo estilo original) \*/

&nbsp;       .dashboard-container {

&nbsp;           max-width: 1600px;

&nbsp;           margin: 0 auto;

&nbsp;           padding: 20px;

&nbsp;           flex: 1;

&nbsp;       }

&nbsp;       

&nbsp;       .dashboard-header {

&nbsp;           background: linear-gradient(135deg, var(--primary-color), var(--accent-color));

&nbsp;           border-radius: 12px;

&nbsp;           padding: 2px;

&nbsp;           margin-bottom: 5px;

&nbsp;           box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);

&nbsp;           display: flex;

&nbsp;           flex-direction: column;

&nbsp;           color: white;

&nbsp;           position: relative;

&nbsp;           overflow: hidden;

&nbsp;       }

&nbsp;       

&nbsp;       .dashboard-header::before {

&nbsp;           content: '';

&nbsp;           position: absolute;

&nbsp;           top: -50%;

&nbsp;           right: -50%;

&nbsp;           width: 100%;

&nbsp;           height: 200%;

&nbsp;           background: rgba(255, 255, 255, 0.1);

&nbsp;           transform: rotate(25deg);

&nbsp;       }

&nbsp;       

&nbsp;       .header-top {

&nbsp;           display: flex;

&nbsp;           justify-content: space-between;

&nbsp;           align-items: center;

&nbsp;           width: 100%;

&nbsp;           position: relative;

&nbsp;           z-index: 1;

&nbsp;           margin-bottom: 2px;

&nbsp;       }

&nbsp;       

&nbsp;       .logo-fw {

&nbsp;           width: 140px;

&nbsp;           flex-shrink: 0;

&nbsp;           margin-left: 25px;

&nbsp;           position: relative;

&nbsp;           top: 42px;

&nbsp;       }

&nbsp;       

&nbsp;       .logo-fw img {

&nbsp;           width: 100%;

&nbsp;           height: auto;

&nbsp;           margin-left: 20px;

&nbsp;           margin-top: 10px;

&nbsp;           max-height: 650px;

&nbsp;           object-fit: contain;

&nbsp;       }

&nbsp;       

&nbsp;       .header-center {

&nbsp;           text-align: center;

&nbsp;           flex-grow: 1;

&nbsp;           padding: 0 20px;

&nbsp;       }

&nbsp;       

&nbsp;       .project-title {

&nbsp;           font-size: 40px;

&nbsp;           font-weight: 700;

&nbsp;           position: relative;

&nbsp;           left: 70px;

&nbsp;           z-index: 1;

&nbsp;           margin-bottom: 5px;

&nbsp;       }

&nbsp;       

&nbsp;       .project-subtitle {

&nbsp;           font-size: 16px;

&nbsp;           opacity: 0.9;

&nbsp;           position: relative;

&nbsp;           z-index: 1;

&nbsp;       }

&nbsp;       

&nbsp;       .header-right {

&nbsp;           display: flex;

&nbsp;           gap: 30px;

&nbsp;           flex-shrink: 0;

&nbsp;       }

&nbsp;       

&nbsp;       .logo-right {

&nbsp;           display: flex;

&nbsp;           align-items: center;

&nbsp;           justify-content: center;

&nbsp;       }

&nbsp;       

&nbsp;       .logo-right img {

&nbsp;           width: 100%;

&nbsp;           height: auto;

&nbsp;           max-height: 60px;

&nbsp;           object-fit: contain;

&nbsp;       }

&nbsp;       

&nbsp;       .logo-delservin {

&nbsp;           width: 130px;

&nbsp;           position: relative;

&nbsp;           top: 38px;

&nbsp;           flex-shrink: 0;

&nbsp;       }

&nbsp;       

&nbsp;       .logo-altercon {

&nbsp;           width: 100px;

&nbsp;           position: relative;

&nbsp;           top: 38px;

&nbsp;           margin-right: 30px;

&nbsp;           flex-shrink: 0;

&nbsp;       }

&nbsp;       

&nbsp;       .user-info {

&nbsp;           position: absolute;

&nbsp;           top: 0px;

&nbsp;           right: 20px;

&nbsp;           z-index: 2;

&nbsp;           display: flex;

&nbsp;           align-items: center;

&nbsp;           gap: 15px;

&nbsp;       }

&nbsp;       

&nbsp;       .user-welcome {

&nbsp;           color: white;

&nbsp;           font-size: 14px;

&nbsp;           background: rgba(0, 0, 0, 0.2);

&nbsp;           padding: 8px 15px;

&nbsp;           border-radius: 20px;

&nbsp;           display: flex;

&nbsp;           align-items: center;

&nbsp;           gap: 8px;

&nbsp;       }

&nbsp;       

&nbsp;       .logout-btn {

&nbsp;           background: rgba(255, 255, 255, 0.2);

&nbsp;           border: 1px solid rgba(255, 255, 255, 0.3);

&nbsp;           color: white;

&nbsp;           padding: 8px 15px;

&nbsp;           border-radius: 20px;

&nbsp;           cursor: pointer;

&nbsp;           font-size: 14px;

&nbsp;           transition: all 0.3s ease;

&nbsp;           display: flex;

&nbsp;           align-items: center;

&nbsp;           gap: 5px;

&nbsp;       }

&nbsp;       

&nbsp;       .logout-btn:hover {

&nbsp;           background: rgba(255, 255, 255, 0.3);

&nbsp;       }

&nbsp;       

&nbsp;       .project-info {

&nbsp;           display: flex;

&nbsp;           gap: 20px;

&nbsp;           position: relative;

&nbsp;           z-index: 1;

&nbsp;           align-items: center;

&nbsp;           justify-content: center;

&nbsp;           margin-top: 8px;

&nbsp;           flex-wrap: wrap;

&nbsp;       }

&nbsp;       

&nbsp;       .info-item {

&nbsp;           text-align: center;

&nbsp;           min-width: 100px;

&nbsp;       }

&nbsp;       

&nbsp;       .info-label {

&nbsp;           font-size: 14px;

&nbsp;           opacity: 0.9;

&nbsp;           margin-bottom: 8px;

&nbsp;       }

&nbsp;       

&nbsp;       .info-value {

&nbsp;           font-size: 20px;

&nbsp;           font-weight: 700;

&nbsp;       }

&nbsp;       

&nbsp;       .tabs-container {

&nbsp;           background-color: white;

&nbsp;           border-radius: 12px;

&nbsp;           box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);

&nbsp;           margin-bottom: 25px;

&nbsp;           overflow: hidden;

&nbsp;       }

&nbsp;       

&nbsp;       .tabs-header {

&nbsp;           display: flex;

&nbsp;           background-color: var(--light-color);

&nbsp;           border-bottom: 1px solid var(--border-color);

&nbsp;           padding: 0 20px;

&nbsp;           flex-wrap: wrap;

&nbsp;       }

&nbsp;       

&nbsp;       .tab-button {

&nbsp;           padding: 18px 25px;

&nbsp;           background: none;

&nbsp;           border: none;

&nbsp;           cursor: pointer;

&nbsp;           font-size: 15px;

&nbsp;           font-weight: 500;

&nbsp;           color: var(--text-color);

&nbsp;           transition: all 0.3s ease;

&nbsp;           position: relative;

&nbsp;           display: flex;

&nbsp;           align-items: center;

&nbsp;           gap: 8px;

&nbsp;       }

&nbsp;       

&nbsp;       .tab-button:hover {

&nbsp;           background-color: rgba(255, 255, 255, 0.5);

&nbsp;       }

&nbsp;       

&nbsp;       .tab-button.active {

&nbsp;           background-color: white;

&nbsp;           color: var(--secondary-color);

&nbsp;       }

&nbsp;       

&nbsp;       .tab-button.active::after {

&nbsp;           content: '';

&nbsp;           position: absolute;

&nbsp;           bottom: 0;

&nbsp;           left: 0;

&nbsp;           width: 100%;

&nbsp;           height: 3px;

&nbsp;           background-color: var(--secondary-color);

&nbsp;       }

&nbsp;       

&nbsp;       .tab-button.hidden {

&nbsp;           display: none;

&nbsp;       }

&nbsp;       

&nbsp;       .tab-content {

&nbsp;           display: none;

&nbsp;           padding: 30px;

&nbsp;           animation: fadeIn 0.5s ease;

&nbsp;       }

&nbsp;       

&nbsp;       .tab-content.active {

&nbsp;           display: block;

&nbsp;       }

&nbsp;       

&nbsp;       @keyframes fadeIn {

&nbsp;           from { opacity: 0; transform: translateY(10px); }

&nbsp;           to { opacity: 1; transform: translateY(0); }

&nbsp;       }

&nbsp;       

&nbsp;       .section-title {

&nbsp;           font-size: 22px;

&nbsp;           margin-bottom: 25px;

&nbsp;           color: var(--primary-color);

&nbsp;           border-bottom: 1px solid var(--border-color);

&nbsp;           padding-bottom: 12px;

&nbsp;           display: flex;

&nbsp;           align-items: center;

&nbsp;           gap: 10px;

&nbsp;       }

&nbsp;       

&nbsp;       .section-title i {

&nbsp;           color: var(--secondary-color);

&nbsp;       }

&nbsp;       

&nbsp;       .cards-container {

&nbsp;           display: grid;

&nbsp;           grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));

&nbsp;           gap: 20px;

&nbsp;           margin-bottom: 35px;

&nbsp;       }

&nbsp;       

&nbsp;       .card {

&nbsp;           background-color: white;

&nbsp;           border-radius: 10px;

&nbsp;           padding: 25px;

&nbsp;           box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);

&nbsp;           transition: transform 0.3s ease, box-shadow 0.3s ease;

&nbsp;           border-left: 4px solid var(--secondary-color);

&nbsp;       }

&nbsp;       

&nbsp;       .card:hover {

&nbsp;           transform: translateY(-5px);

&nbsp;           box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);

&nbsp;       }

&nbsp;       

&nbsp;       .card.hidden {

&nbsp;           display: none;

&nbsp;       }

&nbsp;       

&nbsp;       .card-title {

&nbsp;           font-size: 18px;

&nbsp;           font-weight: 600;

&nbsp;           margin-bottom: 20px;

&nbsp;           color: var(--primary-color);

&nbsp;           display: flex;

&nbsp;           align-items: center;

&nbsp;           gap: 10px;

&nbsp;       }

&nbsp;       

&nbsp;       .card-title i {

&nbsp;           color: var(--secondary-color);

&nbsp;       }

&nbsp;       

&nbsp;       .progress-container {

&nbsp;           margin-bottom: 18px;

&nbsp;       }

&nbsp;       

&nbsp;       .progress-label {

&nbsp;           display: flex;

&nbsp;           justify-content: space-between;

&nbsp;           margin-bottom: 8px;

&nbsp;           font-size: 14px;

&nbsp;       }

&nbsp;       

&nbsp;       .progress-bar {

&nbsp;           height: 10px;

&nbsp;           background-color: var(--light-color);

&nbsp;           border-radius: 5px;

&nbsp;           overflow: hidden;

&nbsp;       }

&nbsp;       

&nbsp;       .progress-fill {

&nbsp;           height: 100%;

&nbsp;           border-radius: 5px;

&nbsp;           transition: width 0.8s ease;

&nbsp;       }

&nbsp;       

&nbsp;       .progress-fill.planned {

&nbsp;           background-color: var(--secondary-color);

&nbsp;       }

&nbsp;       

&nbsp;       .progress-fill.actual {

&nbsp;           background-color: var(--success-color);

&nbsp;       }

&nbsp;       

&nbsp;       .chart-container {

&nbsp;           background-color: white;

&nbsp;           border-radius: 10px;

&nbsp;           padding: 25px;

&nbsp;           box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);

&nbsp;           margin-bottom: 25px;

&nbsp;           height: 450px;

&nbsp;       }

&nbsp;       

&nbsp;       .chart-title {

&nbsp;           font-size: 18px;

&nbsp;           font-weight: 600;

&nbsp;           margin-bottom: 20px;

&nbsp;           color: var(--primary-color);

&nbsp;           display: flex;

&nbsp;           align-items: center;

&nbsp;           gap: 10px;

&nbsp;       }

&nbsp;       

&nbsp;       .chart-title i {

&nbsp;           color: var(--secondary-color);

&nbsp;       }

&nbsp;       

&nbsp;       .status-badge {

&nbsp;           display: inline-flex;

&nbsp;           align-items: center;

&nbsp;           gap: 6px;

&nbsp;           padding: 6px 14px;

&nbsp;           border-radius: 20px;

&nbsp;           font-size: 13px;

&nbsp;           font-weight: 500;

&nbsp;       }

&nbsp;       

&nbsp;       .status-completed {

&nbsp;           background-color: rgba(39, 174, 96, 0.1);

&nbsp;           color: var(--success-color);

&nbsp;       }

&nbsp;       

&nbsp;       .status-ontrack {

&nbsp;           background-color: rgba(52, 152, 219, 0.1);

&nbsp;           color: var(--secondary-color);

&nbsp;       }

&nbsp;       

&nbsp;       .status-delayed {

&nbsp;           background-color: rgba(231, 76, 60, 0.1);

&nbsp;           color: var(--danger-color);

&nbsp;       }

&nbsp;       

&nbsp;       /\* Formulário de cadastro - CORREÇÃO APLICADA \*/

&nbsp;       .form-container {

&nbsp;           background-color: white;

&nbsp;           border-radius: 10px;

&nbsp;           padding: 25px;

&nbsp;           box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);

&nbsp;           margin-bottom: 25px;

&nbsp;       }

&nbsp;       

&nbsp;       .form-group {

&nbsp;           margin-bottom: 20px;

&nbsp;       }

&nbsp;       

&nbsp;       .form-row {

&nbsp;           display: grid;

&nbsp;           grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

&nbsp;           gap: 20px;

&nbsp;       }

&nbsp;       

&nbsp;       .form-row-3 {

&nbsp;           display: grid;

&nbsp;           grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));

&nbsp;           gap: 15px;

&nbsp;       }

&nbsp;       

&nbsp;       label {

&nbsp;           display: block;

&nbsp;           margin-bottom: 8px;

&nbsp;           font-weight: 500;

&nbsp;           color: var(--primary-color); /\* CORREÇÃO: Cor definida explicitamente \*/

&nbsp;       }

&nbsp;       

&nbsp;       label.required::after {

&nbsp;           content: " \*";

&nbsp;           color: var(--danger-color);

&nbsp;       }

&nbsp;       

&nbsp;       input, select, textarea {

&nbsp;           width: 100%;

&nbsp;           padding: 12px 15px;

&nbsp;           border: 1px solid var(--border-color);

&nbsp;           border-radius: 8px;

&nbsp;           font-size: 15px;

&nbsp;           transition: border 0.3s ease;

&nbsp;           background-color: white; /\* CORREÇÃO: Fundo branco explícito \*/

&nbsp;           color: var(--text-color); /\* CORREÇÃO: Cor do texto explícita \*/

&nbsp;       }

&nbsp;       

&nbsp;       input::placeholder, select::placeholder, textarea::placeholder {

&nbsp;           color: var(--gray-color); /\* CORREÇÃO: Placeholder visível \*/

&nbsp;       }

&nbsp;       

&nbsp;       input:focus, select:focus, textarea:focus {

&nbsp;           outline: none;

&nbsp;           border-color: var(--secondary-color);

&nbsp;       }

&nbsp;       

&nbsp;       input.error, select.error, textarea.error {

&nbsp;           border-color: var(--danger-color);

&nbsp;           background-color: rgba(231, 76, 60, 0.05);

&nbsp;       }

&nbsp;       

&nbsp;       .error-message {

&nbsp;           color: var(--danger-color);

&nbsp;           font-size: 13px;

&nbsp;           margin-top: 5px;

&nbsp;           display: none;

&nbsp;       }

&nbsp;       

&nbsp;       .btn {

&nbsp;           padding: 12px 25px;

&nbsp;           border: none;

&nbsp;           border-radius: 8px;

&nbsp;           font-size: 15px;

&nbsp;           font-weight: 500;

&nbsp;           cursor: pointer;

&nbsp;           transition: all 0.3s ease;

&nbsp;           display: inline-flex;

&nbsp;           align-items: center;

&nbsp;           gap: 8px;

&nbsp;       }

&nbsp;       

&nbsp;       .btn-primary {

&nbsp;           background-color: var(--secondary-color);

&nbsp;           color: white;

&nbsp;       }

&nbsp;       

&nbsp;       .btn-primary:hover {

&nbsp;           background-color: var(--accent-color);

&nbsp;       }

&nbsp;       

&nbsp;       .btn-success {

&nbsp;           background-color: var(--success-color);

&nbsp;           color: white;

&nbsp;       }

&nbsp;       

&nbsp;       .btn-success:hover {

&nbsp;           background-color: #219653;

&nbsp;       }

&nbsp;       

&nbsp;       .btn-warning {

&nbsp;           background-color: var(--warning-color);

&nbsp;           color: white;

&nbsp;       }

&nbsp;       

&nbsp;       .btn-warning:hover {

&nbsp;           background-color: #e67e22;

&nbsp;       }

&nbsp;       

&nbsp;       .btn-danger {

&nbsp;           background-color: var(--danger-color);

&nbsp;           color: white;

&nbsp;       }

&nbsp;       

&nbsp;       .btn-danger:hover {

&nbsp;           background-color: #c0392b;

&nbsp;       }

&nbsp;       

&nbsp;       .btn-group {

&nbsp;           display: flex;

&nbsp;           gap: 10px;

&nbsp;           flex-wrap: wrap;

&nbsp;       }

&nbsp;       

&nbsp;       /\* Área de captura de imagem \*/

&nbsp;       .image-capture-container {

&nbsp;           background-color: white;

&nbsp;           border-radius: 10px;

&nbsp;           padding: 25px;

&nbsp;           box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);

&nbsp;           margin-bottom: 25px;

&nbsp;       }

&nbsp;       

&nbsp;       .camera-area {

&nbsp;           width: 100%;

&nbsp;           height: 300px;

&nbsp;           background-color: var(--light-color);

&nbsp;           border-radius: 8px;

&nbsp;           display: flex;

&nbsp;           flex-direction: column;

&nbsp;           justify-content: center;

&nbsp;           align-items: center;

&nbsp;           margin-bottom: 20px;

&nbsp;           overflow: hidden;

&nbsp;           position: relative;

&nbsp;       }

&nbsp;       

&nbsp;       .camera-area img {

&nbsp;           max-width: 100%;

&nbsp;           max-height: 100%;

&nbsp;           object-fit: contain;

&nbsp;       }

&nbsp;       

&nbsp;       .camera-placeholder {

&nbsp;           text-align: center;

&nbsp;           color: var(--gray-color);

&nbsp;       }

&nbsp;       

&nbsp;       .camera-placeholder i {

&nbsp;           font-size: 60px;

&nbsp;           margin-bottom: 15px;

&nbsp;       }

&nbsp;       

&nbsp;       .camera-controls {

&nbsp;           display: flex;

&nbsp;           gap: 10px;

&nbsp;           justify-content: center;

&nbsp;           margin-top: 20px;

&nbsp;       }

&nbsp;       

&nbsp;       /\* Lista de ferramentas \*/

&nbsp;       .tools-list {

&nbsp;           background-color: white;

&nbsp;           border-radius: 10px;

&nbsp;           overflow: hidden;

&nbsp;           box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);

&nbsp;           margin-bottom: 25px;

&nbsp;       }

&nbsp;       

&nbsp;       .table-container {

&nbsp;           overflow-x: auto;

&nbsp;       }

&nbsp;       

&nbsp;       table {

&nbsp;           width: 100%;

&nbsp;           border-collapse: collapse;

&nbsp;           font-size: 14px;

&nbsp;       }

&nbsp;       

&nbsp;       th {

&nbsp;           background-color: var(--light-color);

&nbsp;           padding: 15px 12px;

&nbsp;           text-align: left;

&nbsp;           font-weight: 600;

&nbsp;           color: var(--primary-color);

&nbsp;           border-bottom: 1px solid var(--border-color);

&nbsp;           white-space: nowrap;

&nbsp;       }

&nbsp;       

&nbsp;       td {

&nbsp;           padding: 12px;

&nbsp;           border-bottom: 1px solid var(--border-color);

&nbsp;           vertical-align: middle;

&nbsp;       }

&nbsp;       

&nbsp;       tr:last-child td {

&nbsp;           border-bottom: none;

&nbsp;       }

&nbsp;       

&nbsp;       tr:hover {

&nbsp;           background-color: rgba(236, 240, 241, 0.5);

&nbsp;       }

&nbsp;       

&nbsp;       .tool-image {

&nbsp;           width: 60px;

&nbsp;           height: 60px;

&nbsp;           object-fit: cover;

&nbsp;           border-radius: 6px;

&nbsp;       }

&nbsp;       

&nbsp;       .action-buttons {

&nbsp;           display: flex;

&nbsp;           gap: 8px;

&nbsp;       }

&nbsp;       

&nbsp;       .action-btn {

&nbsp;           padding: 6px 10px;

&nbsp;           border: none;

&nbsp;           border-radius: 6px;

&nbsp;           background-color: transparent;

&nbsp;           cursor: pointer;

&nbsp;           transition: all 0.3s ease;

&nbsp;           font-size: 14px;

&nbsp;       }

&nbsp;       

&nbsp;       .action-btn-view {

&nbsp;           color: var(--secondary-color);

&nbsp;       }

&nbsp;       

&nbsp;       .action-btn-edit {

&nbsp;           color: var(--warning-color);

&nbsp;       }

&nbsp;       

&nbsp;       .action-btn-delete {

&nbsp;           color: var(--danger-color);

&nbsp;       }

&nbsp;       

&nbsp;       .action-btn:hover {

&nbsp;           background-color: rgba(0, 0, 0, 0.05);

&nbsp;       }

&nbsp;       

&nbsp;       /\* Modal \*/

&nbsp;       .modal {

&nbsp;           display: none;

&nbsp;           position: fixed;

&nbsp;           top: 0;

&nbsp;           left: 0;

&nbsp;           width: 100%;

&nbsp;           height: 100%;

&nbsp;           background-color: rgba(0, 0, 0, 0.7);

&nbsp;           z-index: 1000;

&nbsp;           justify-content: center;

&nbsp;           align-items: center;

&nbsp;       }

&nbsp;       

&nbsp;       .modal-content {

&nbsp;           background-color: white;

&nbsp;           border-radius: 12px;

&nbsp;           width: 90%;

&nbsp;           max-width: 900px;

&nbsp;           max-height: 90vh;

&nbsp;           overflow-y: auto;

&nbsp;           animation: modalFadeIn 0.3s ease;

&nbsp;       }

&nbsp;       

&nbsp;       .modal-header {

&nbsp;           padding: 20px 25px;

&nbsp;           border-bottom: 1px solid var(--border-color);

&nbsp;           display: flex;

&nbsp;           justify-content: space-between;

&nbsp;           align-items: center;

&nbsp;       }

&nbsp;       

&nbsp;       .modal-title {

&nbsp;           font-size: 20px;

&nbsp;           color: var(--primary-color);

&nbsp;       }

&nbsp;       

&nbsp;       .modal-close {

&nbsp;           background: none;

&nbsp;           border: none;

&nbsp;           font-size: 20px;

&nbsp;           cursor: pointer;

&nbsp;           color: var(--gray-color);

&nbsp;       }

&nbsp;       

&nbsp;       .modal-body {

&nbsp;           padding: 25px;

&nbsp;       }

&nbsp;       

&nbsp;       @keyframes modalFadeIn {

&nbsp;           from { opacity: 0; transform: translateY(-20px); }

&nbsp;           to { opacity: 1; transform: translateY(0); }

&nbsp;       }

&nbsp;       

&nbsp;       /\* Configuração do banco de dados - CORREÇÃO APLICADA \*/

&nbsp;       .config-container {

&nbsp;           background-color: white;

&nbsp;           border-radius: 10px;

&nbsp;           padding: 25px;

&nbsp;           box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);

&nbsp;           margin-bottom: 25px;

&nbsp;       }

&nbsp;       

&nbsp;       .config-step {

&nbsp;           margin-bottom: 30px;

&nbsp;           padding-bottom: 20px;

&nbsp;           border-bottom: 1px solid var(--border-color);

&nbsp;       }

&nbsp;       

&nbsp;       .config-step:last-child {

&nbsp;           border-bottom: none;

&nbsp;           margin-bottom: 0;

&nbsp;           padding-bottom: 0;

&nbsp;       }

&nbsp;       

&nbsp;       .step-title {

&nbsp;           font-size: 18px;

&nbsp;           font-weight: 600;

&nbsp;           margin-bottom: 15px;

&nbsp;           color: var(--primary-color);

&nbsp;           display: flex;

&nbsp;           align-items: center;

&nbsp;           gap: 10px;

&nbsp;       }

&nbsp;       

&nbsp;       .step-title i {

&nbsp;           color: var(--secondary-color);

&nbsp;       }

&nbsp;       

&nbsp;       .step-content {

&nbsp;           margin-left: 35px;

&nbsp;       }

&nbsp;       

&nbsp;       .step-content p {

&nbsp;           color: var(--text-color); /\* CORREÇÃO: Cor do texto explícita \*/

&nbsp;           margin-bottom: 10px;

&nbsp;       }

&nbsp;       

&nbsp;       .step-content a {

&nbsp;           color: var(--secondary-color);

&nbsp;           text-decoration: none;

&nbsp;       }

&nbsp;       

&nbsp;       .step-content a:hover {

&nbsp;           text-decoration: underline;

&nbsp;       }

&nbsp;       

&nbsp;       .code-block {

&nbsp;           background-color: #2c3e50;

&nbsp;           color: #ecf0f1;

&nbsp;           padding: 15px;

&nbsp;           border-radius: 8px;

&nbsp;           font-family: 'Courier New', monospace;

&nbsp;           margin: 15px 0;

&nbsp;           overflow-x: auto;

&nbsp;           font-size: 14px;

&nbsp;       }

&nbsp;       

&nbsp;       .storage-status {

&nbsp;           display: flex;

&nbsp;           align-items: center;

&nbsp;           gap: 10px;

&nbsp;           margin-bottom: 15px;

&nbsp;       }

&nbsp;       

&nbsp;       .status-indicator {

&nbsp;           width: 12px;

&nbsp;           height: 12px;

&nbsp;           border-radius: 50%;

&nbsp;           background-color: var(--gray-color);

&nbsp;       }

&nbsp;       

&nbsp;       .status-indicator.online {

&nbsp;           background-color: var(--success-color);

&nbsp;           animation: pulse 2s infinite;

&nbsp;       }

&nbsp;       

&nbsp;       @keyframes pulse {

&nbsp;           0% { opacity: 1; }

&nbsp;           50% { opacity: 0.5; }

&nbsp;           100% { opacity: 1; }

&nbsp;       }

&nbsp;       

&nbsp;       /\* Responsividade \*/

&nbsp;       @media (max-width: 992px) {

&nbsp;           .header-top {

&nbsp;               flex-direction: column;

&nbsp;               gap: 15px;

&nbsp;               text-align: center;

&nbsp;           }

&nbsp;           

&nbsp;           .logo-fw, .header-right {

&nbsp;               width: 100%;

&nbsp;               justify-content: center;

&nbsp;           }

&nbsp;           

&nbsp;           .header-center {

&nbsp;               padding: 0;

&nbsp;           }

&nbsp;           

&nbsp;           .project-info {

&nbsp;               gap: 15px;

&nbsp;           }

&nbsp;           

&nbsp;           .info-item {

&nbsp;               min-width: 80px;

&nbsp;           }

&nbsp;           

&nbsp;           .form-row, .form-row-3 {

&nbsp;               grid-template-columns: 1fr;

&nbsp;           }

&nbsp;           

&nbsp;           .user-info {

&nbsp;               position: relative;

&nbsp;               top: 0;

&nbsp;               right: 0;

&nbsp;               justify-content: center;

&nbsp;               margin-top: 10px;

&nbsp;           }

&nbsp;       }

&nbsp;       

&nbsp;       @media (max-width: 768px) {

&nbsp;           .tabs-header {

&nbsp;               justify-content: center;

&nbsp;           }

&nbsp;           

&nbsp;           .btn-group {

&nbsp;               justify-content: center;

&nbsp;           }

&nbsp;           

&nbsp;           .step-content {

&nbsp;               margin-left: 0;

&nbsp;           }

&nbsp;           

&nbsp;           .header-right {

&nbsp;               gap: 15px;

&nbsp;           }

&nbsp;           

&nbsp;           .logo-delservin {

&nbsp;               width: 100px;

&nbsp;           }

&nbsp;           

&nbsp;           .logo-altercon {

&nbsp;               width: 80px;

&nbsp;           }

&nbsp;           

&nbsp;           table {

&nbsp;               font-size: 13px;

&nbsp;           }

&nbsp;           

&nbsp;           th, td {

&nbsp;               padding: 10px 8px;

&nbsp;           }

&nbsp;           

&nbsp;           .login-box {

&nbsp;               padding: 30px 20px;

&nbsp;           }

&nbsp;           

&nbsp;           .login-title {

&nbsp;               font-size: 28px;

&nbsp;           }

&nbsp;       }

&nbsp;       

&nbsp;       @media (max-width: 480px) {

&nbsp;           .dashboard-container {

&nbsp;               padding: 10px;

&nbsp;           }

&nbsp;           

&nbsp;           .tab-content {

&nbsp;               padding: 15px;

&nbsp;           }

&nbsp;           

&nbsp;           .section-title {

&nbsp;               font-size: 18px;

&nbsp;           }

&nbsp;           

&nbsp;           .card {

&nbsp;               padding: 15px;

&nbsp;           }

&nbsp;           

&nbsp;           .btn {

&nbsp;               padding: 10px 15px;

&nbsp;               font-size: 14px;

&nbsp;           }

&nbsp;           

&nbsp;           .camera-controls {

&nbsp;               flex-wrap: wrap;

&nbsp;           }

&nbsp;           

&nbsp;           .login-box {

&nbsp;               padding: 25px 15px;

&nbsp;           }

&nbsp;           

&nbsp;           .login-title {

&nbsp;               font-size: 24px;

&nbsp;           }

&nbsp;       }

&nbsp;       

&nbsp;       /\* Notificações \*/

&nbsp;       .notification {

&nbsp;           position: fixed;

&nbsp;           top: 150px;

&nbsp;           right: 20px;

&nbsp;           padding: 10px 25px;

&nbsp;           border-radius: 8px;

&nbsp;           color: white;

&nbsp;           font-weight: 500;

&nbsp;           z-index: 1100;

&nbsp;           animation: slideIn 0.3s ease;

&nbsp;           box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);

&nbsp;           display: flex;

&nbsp;           align-items: center;

&nbsp;           gap: 10px;

&nbsp;           max-width: 400px;

&nbsp;       }

&nbsp;       

&nbsp;       .notification-success {

&nbsp;           background-color: var(--success-color);

&nbsp;       }

&nbsp;       

&nbsp;       .notification-error {

&nbsp;           background-color: var(--danger-color);

&nbsp;       }

&nbsp;       

&nbsp;       .notification-warning {

&nbsp;           background-color: var(--warning-color);

&nbsp;       }

&nbsp;       

&nbsp;       @keyframes slideIn {

&nbsp;           from { transform: translateX(100%); opacity: 0; }

&nbsp;           to { transform: translateX(0); opacity: 1; }

&nbsp;       }

&nbsp;       

&nbsp;       /\* Loader \*/

&nbsp;       .loader {

&nbsp;           display: none;

&nbsp;           width: 50px;

&nbsp;           height: 50px;

&nbsp;           border: 5px solid #f3f3f3;

&nbsp;           border-top: 5px solid var(--secondary-color);

&nbsp;           border-radius: 50%;

&nbsp;           animation: spin 1s linear infinite;

&nbsp;           margin: 20px auto;

&nbsp;       }

&nbsp;       

&nbsp;       @keyframes spin {

&nbsp;           0% { transform: rotate(0deg); }

&nbsp;           100% { transform: rotate(360deg); }

&nbsp;       }

&nbsp;       

&nbsp;       /\* Info de armazenamento \*/

&nbsp;       .storage-info {

&nbsp;           background-color: #f8f9fa;

&nbsp;           border-radius: 8px;

&nbsp;           padding: 15px;

&nbsp;           margin-top: 10px;

&nbsp;           border-left: 4px solid var(--secondary-color);

&nbsp;       }

&nbsp;       

&nbsp;       .storage-info p {

&nbsp;           margin: 5px 0;

&nbsp;           font-size: 14px;

&nbsp;           color: var(--text-color); /\* CORREÇÃO: Cor do texto explícita \*/

&nbsp;       }

&nbsp;       

&nbsp;       .storage-info .storage-type {

&nbsp;           display: inline-block;

&nbsp;           padding: 3px 8px;

&nbsp;           background-color: var(--light-color);

&nbsp;           border-radius: 4px;

&nbsp;           font-size: 12px;

&nbsp;           margin-left: 5px;

&nbsp;       }

&nbsp;       

&nbsp;       .storage-info.hidden {

&nbsp;           display: none;

&nbsp;       }

&nbsp;       

&nbsp;       .export-history {

&nbsp;           max-height: 300px;

&nbsp;           overflow-y: auto;

&nbsp;       }

&nbsp;       

&nbsp;       /\* Backup Button \*/

&nbsp;       .backup-btn {

&nbsp;           background-color: #8e44ad;

&nbsp;           color: white;

&nbsp;       }

&nbsp;       

&nbsp;       .backup-btn:hover {

&nbsp;           background-color: #7d3c98;

&nbsp;       }

&nbsp;       

&nbsp;       /\* Search Box \*/

&nbsp;       .search-box {

&nbsp;           position: relative;

&nbsp;           margin-bottom: 20px;

&nbsp;       }

&nbsp;       

&nbsp;       .search-box input {

&nbsp;           padding-left: 40px;

&nbsp;       }

&nbsp;       

&nbsp;       .search-box i {

&nbsp;           position: absolute;

&nbsp;           left: 15px;

&nbsp;           top: 50%;

&nbsp;           transform: translateY(-50%);

&nbsp;           color: var(--gray-color);

&nbsp;       }

&nbsp;       

&nbsp;       /\* Tool Status Colors \*/

&nbsp;       .status-available { color: var(--success-color); }

&nbsp;       .status-inuse { color: var(--secondary-color); }

&nbsp;       .status-maintenance { color: var(--warning-color); }

&nbsp;       .status-damaged { color: var(--danger-color); }

&nbsp;       

&nbsp;       /\* QR Code Styles \*/

&nbsp;       .qrcode-container {

&nbsp;           text-align: center;

&nbsp;           padding: 20px;

&nbsp;       }

&nbsp;       

&nbsp;       .qrcode-container canvas {

&nbsp;           max-width: 200px;

&nbsp;           max-height: 200px;

&nbsp;           margin: 0 auto 20px;

&nbsp;       }

&nbsp;       

&nbsp;       /\* Number input spinner \*/

&nbsp;       input\[type="number"]::-webkit-inner-spin-button,

&nbsp;       input\[type="number"]::-webkit-outer-spin-button {

&nbsp;           opacity: 1;

&nbsp;           height: 30px;

&nbsp;       }

&nbsp;       

&nbsp;       /\* Money input \*/

&nbsp;       .money-input {

&nbsp;           position: relative;

&nbsp;       }

&nbsp;       

&nbsp;       .money-input::before {

&nbsp;           content: "R$";

&nbsp;           position: absolute;

&nbsp;           left: 12px;

&nbsp;           top: 12px;

&nbsp;           color: var(--gray-color);

&nbsp;       }

&nbsp;       

&nbsp;       .money-input input {

&nbsp;           padding-left: 40px;

&nbsp;       }

&nbsp;       

&nbsp;       /\* Compact table view \*/

&nbsp;       .compact-view .action-buttons {

&nbsp;           flex-direction: column;

&nbsp;           gap: 4px;

&nbsp;       }

&nbsp;       

&nbsp;       /\* Stock indicators \*/

&nbsp;       .stock-low {

&nbsp;           color: var(--danger-color);

&nbsp;           font-weight: bold;

&nbsp;       }

&nbsp;       

&nbsp;       .stock-normal {

&nbsp;           color: var(--success-color);

&nbsp;       }

&nbsp;       

&nbsp;       .stock-high {

&nbsp;           color: var(--warning-color);

&nbsp;       }

&nbsp;       

&nbsp;       /\* Footer \*/

&nbsp;       .site-footer {

&nbsp;           background-color: var(--primary-color);

&nbsp;           color: white;

&nbsp;           padding: 20px;

&nbsp;           text-align: center;

&nbsp;           margin-top: 40px;

&nbsp;       }

&nbsp;       

&nbsp;       .footer-content {

&nbsp;           max-width: 1200px;

&nbsp;           margin: 0 auto;

&nbsp;       }

&nbsp;       

&nbsp;       .footer-version {

&nbsp;           margin-top: 10px;

&nbsp;           font-size: 14px;

&nbsp;           opacity: 0.8;

&nbsp;       }

&nbsp;       

&nbsp;       /\* CORREÇÕES ESPECÍFICAS PARA OS PROBLEMAS RELATADOS \*/

&nbsp;       

&nbsp;       /\* Garantir que todos os textos dentro dos containers sejam legíveis \*/

&nbsp;       .config-container p,

&nbsp;       .config-container label,

&nbsp;       .config-container .form-group label {

&nbsp;           color: var(--text-color) !important;

&nbsp;       }

&nbsp;       

&nbsp;       /\* Configurar inputs na aba de Banco de Dados \*/

&nbsp;       .config-container input,

&nbsp;       .config-container select {

&nbsp;           background-color: white !important;

&nbsp;           color: var(--text-color) !important;

&nbsp;           border: 1px solid var(--border-color) !important;

&nbsp;       }

&nbsp;       

&nbsp;       .config-container input::placeholder {

&nbsp;           color: var(--gray-color) !important;

&nbsp;       }

&nbsp;       

&nbsp;       /\* Labels na aba de configuração do banco \*/

&nbsp;       .config-container .form-group label {

&nbsp;           color: var(--primary-color) !important;

&nbsp;           font-weight: 500;

&nbsp;       }

&nbsp;       

&nbsp;       /\* Títulos nas seções \*/

&nbsp;       .form-container h4,

&nbsp;       .config-step h4.step-title {

&nbsp;           color: var(--primary-color) !important;

&nbsp;       }

&nbsp;       

&nbsp;       /\* Texto explicativo nas configurações \*/

&nbsp;       .step-content p,

&nbsp;       .config-step p {

&nbsp;           color: var(--text-color) !important;

&nbsp;           opacity: 1 !important;

&nbsp;       }

&nbsp;       

&nbsp;       /\* Garantir que links sejam visíveis \*/

&nbsp;       .step-content a {

&nbsp;           color: var(--secondary-color) !important;

&nbsp;       }

&nbsp;       

&nbsp;       /\* ========= CORREÇÕES ADICIONAIS ========= \*/

&nbsp;       /\* CORREÇÕES ESPECÍFICAS PARA OS PROBLEMAS RELATADOS \*/

&nbsp;       

&nbsp;       /\* 1. CORREÇÃO PARA ABAS 'CADASTRAR ITEM' E 'BANCO DE DADOS' \*/

&nbsp;       #cadastro .form-container,

&nbsp;       #cadastro .image-capture-container,

&nbsp;       #database .config-container {

&nbsp;           background-color: white !important;

&nbsp;       }

&nbsp;       

&nbsp;       /\* 2. CORREÇÃO PARA TEXTOS TRANSPARENTES \*/

&nbsp;       #cadastro label,

&nbsp;       #cadastro .form-group label,

&nbsp;       #cadastro .section-title,

&nbsp;       #cadastro h4,

&nbsp;       #database .config-step .step-content p,

&nbsp;       #database .config-step .step-content label,

&nbsp;       #database .step-title {

&nbsp;           color: var(--text-color) !important;

&nbsp;           opacity: 1 !important;

&nbsp;           font-weight: 500 !important;

&nbsp;       }

&nbsp;       

&nbsp;       /\* 3. CORREÇÃO PARA CAIXAS DE SELEÇÃO E INPUTS INVISÍVEIS \*/

&nbsp;       #cadastro input,

&nbsp;       #cadastro select,

&nbsp;       #cadastro textarea,

&nbsp;       #database input,

&nbsp;       #database select {

&nbsp;           background-color: white !important;

&nbsp;           color: var(--text-color) !important;

&nbsp;           border: 1px solid var(--border-color) !important;

&nbsp;           -webkit-appearance: none;

&nbsp;           -moz-appearance: none;

&nbsp;           appearance: none;

&nbsp;       }

&nbsp;       

&nbsp;       /\* 4. CORREÇÃO PARA PLACEHOLDERS VISÍVEIS \*/

&nbsp;       #cadastro input::placeholder,

&nbsp;       #cadastro select::placeholder,

&nbsp;       #cadastro textarea::placeholder,

&nbsp;       #database input::placeholder {

&nbsp;           color: var(--gray-color) !important;

&nbsp;           opacity: 0.8 !important;

&nbsp;       }

&nbsp;       

&nbsp;       /\* 5. ESTILO ESPECÍFICO PARA SELECTS (CAIXAS DE SELEÇÃO) \*/

&nbsp;       select {

&nbsp;           background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%232c3e50' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e") !important;

&nbsp;           background-repeat: no-repeat !important;

&nbsp;           background-position: right 12px center !important;

&nbsp;           background-size: 16px !important;

&nbsp;           padding-right: 40px !important;

&nbsp;       }

&nbsp;       

&nbsp;       /\* 6. CORREÇÃO PARA TODOS OS INPUTS DO SISTEMA \*/

&nbsp;       input, select, textarea {

&nbsp;           background-color: white !important;

&nbsp;           color: var(--text-color) !important;

&nbsp;           border: 1px solid var(--border-color) !important;

&nbsp;       }

&nbsp;       

&nbsp;       /\* 7. REMOVER TRANSPARÊNCIA DO SISTEMA \*/

&nbsp;       @media (prefers-reduced-transparency: reduce) {

&nbsp;           \* {

&nbsp;               opacity: 1 !important;

&nbsp;               background-color: white !important;

&nbsp;           }

&nbsp;           

&nbsp;           input, select, textarea {

&nbsp;               background-color: white !important;

&nbsp;               opacity: 1 !important;

&nbsp;           }

&nbsp;       }

&nbsp;       

&nbsp;       /\* 8. CORREÇÃO ESPECÍFICA PARA A ABA DE CADASTRO \*/

&nbsp;       #cadastro .form-group label.required {

&nbsp;           color: var(--primary-color) !important;

&nbsp;       }

&nbsp;       

&nbsp;       #cadastro .form-group label.required::after {

&nbsp;           color: var(--danger-color) !important;

&nbsp;       }

&nbsp;       

&nbsp;       /\* 9. GARANTIR CONTRASTE ADEQUADO EM TODOS OS ELEMENTOS \*/

&nbsp;       #cadastro,

&nbsp;       #database {

&nbsp;           background-color: white !important;

&nbsp;       }

&nbsp;       

&nbsp;       #cadastro \*:not(.btn):not(.notification):not(.status-badge):not(.tab-button),

&nbsp;       #database \*:not(.btn):not(.notification):not(.status-badge):not(.tab-button) {

&nbsp;           color: var(--text-color) !important;

&nbsp;       }

&nbsp;   </style>

</head>

<body>

&nbsp;   <!-- Login Screen (Inicial) -->

&nbsp;   <div id="loginScreen" class="login-container">

&nbsp;       <div class="login-box">

&nbsp;           <div class="login-header">

&nbsp;               <div class="login-logo-fw">

&nbsp;                   <img src="FW Logo.png" alt="FW Logo">

&nbsp;               </div>

&nbsp;               <h1 class="login-title">Sistema de Controle de Ferramentas</h1>

&nbsp;               <p class="login-subtitle">Faça login para acessar o sistema</p>

&nbsp;           </div>

&nbsp;           

&nbsp;           <div class="login-error" id="loginError">

&nbsp;               <i class="fas fa-exclamation-circle"></i> Credenciais inválidas. Tente novamente.

&nbsp;           </div>

&nbsp;           

&nbsp;           <div class="login-form">

&nbsp;               <div class="form-group">

&nbsp;                   <label for="loginEmail">Email ou Usuário</label>

&nbsp;                   <input type="text" id="loginEmail" placeholder="Digite seu email ou usuário">

&nbsp;               </div>

&nbsp;               

&nbsp;               <div class="form-group">

&nbsp;                   <label for="loginPassword">Senha</label>

&nbsp;                   <input type="password" id="loginPassword" placeholder="Digite sua senha">

&nbsp;               </div>

&nbsp;               

&nbsp;               <button type="button" class="login-btn" id="loginBtn">

&nbsp;                   <i class="fas fa-sign-in-alt"></i> Entrar no Sistema

&nbsp;               </button>

&nbsp;               

&nbsp;               <div style="margin-top: 20px; text-align: center;">

&nbsp;                   <p style="font-size: 14px; opacity: 0.9;">Credenciais de exemplo:</p>

&nbsp;                   <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 10px; margin-top: 10px;">

&nbsp;                       <div style="background: rgba(255,255,255,0.1); padding: 10px; border-radius: 8px;">

&nbsp;                           <span style="font-size: 12px; display: block;">DEV (Acesso Total)</span>

&nbsp;                           <span style="font-size: 11px;">fabio@fwcompany.com.br / FabioFW123@</span>

&nbsp;                       </div>

&nbsp;                       <div style="background: rgba(255,255,255,0.1); padding: 10px; border-radius: 8px;">

&nbsp;                           <span style="font-size: 12px; display: block;">Almoxarife</span>

&nbsp;                           <span style="font-size: 11px;">emerson.silva@fwcompany.com.br / EmersonFW1@</span>

&nbsp;                       </div>

&nbsp;                       <div style="background: rgba(255,255,255,0.1); padding: 10px; border-radius: 8px;">

&nbsp;                           <span style="font-size: 12px; display: block;">Usuário Genérico</span>

&nbsp;                           <span style="font-size: 11px;">fwuser / User123</span>

&nbsp;                       </div>

&nbsp;                   </div>

&nbsp;               </div>

&nbsp;           </div>

&nbsp;           

&nbsp;           <div class="login-footer">

&nbsp;               <div class="login-logo-delservin">

&nbsp;                   <img src="Delservin Logo.png" alt="Delservin Logo">

&nbsp;               </div>

&nbsp;               <div class="login-logo-altercon">

&nbsp;                   <img src="Altercon Logo.png" alt="Altercon Logo">

&nbsp;               </div>

&nbsp;           </div>

&nbsp;       </div>

&nbsp;   </div>

&nbsp;   

&nbsp;   <!-- Dashboard Screen (Após Login) -->

&nbsp;   <div id="dashboardScreen" class="dashboard-container" style="display: none;">

&nbsp;       <header class="dashboard-header">

&nbsp;           <div class="user-info">

&nbsp;               <div class="user-welcome">

&nbsp;                   <i class="fas fa-user"></i>

&nbsp;                   <span id="userWelcomeText">Bem-vindo!</span>

&nbsp;                   <span class="user-badge" id="userRoleBadge">DEV</span>

&nbsp;               </div>

&nbsp;               <button class="logout-btn" id="logoutBtn">

&nbsp;                   <i class="fas fa-sign-out-alt"></i> Sair

&nbsp;               </button>

&nbsp;           </div>

&nbsp;           

&nbsp;           <div class="header-top">

&nbsp;               <div class="logo-fw">

&nbsp;                   <img src="FW Logo.png" alt="FW Logo">

&nbsp;               </div>

&nbsp;               

&nbsp;               <div class="header-center">

&nbsp;                   <h1 class="project-title">Sistema de Controle de Ferramentas</h1>                    

&nbsp;               </div>

&nbsp;               

&nbsp;               <div class="header-right">

&nbsp;                   <div class="logo-right logo-delservin">

&nbsp;                       <img src="Delservin Logo.png" alt="Delservin Logo">

&nbsp;                   </div>

&nbsp;                   <div class="logo-right logo-altercon">

&nbsp;                       <img src="Altercon Logo.png" alt="Altercon Logo">

&nbsp;                   </div>

&nbsp;               </div>

&nbsp;           </div>

&nbsp;           

&nbsp;           <div class="project-info">

&nbsp;               <div class="info-item">

&nbsp;                   <div class="info-label">Total de Itens</div>

&nbsp;                   <div class="info-value" id="totalTools">0</div>

&nbsp;               </div>

&nbsp;               <div class="info-item">

&nbsp;                   <div class="info-label">Valor Total</div>

&nbsp;                   <div class="info-value" id="totalValue">R$ 0,00</div>

&nbsp;               </div>

&nbsp;               <div class="info-item">

&nbsp;                   <div class="info-label">Status</div>

&nbsp;                   <div class="info-value">

&nbsp;                       <span class="status-badge status-ontrack" id="storageStatus">Local</span>

&nbsp;                   </div>

&nbsp;               </div>

&nbsp;               <div class="info-item">

&nbsp;                   <div class="info-label">Cloud</div>

&nbsp;                   <div class="info-value">

&nbsp;                       <span class="status-badge status-delayed" id="indexedDBStatus">Desconectado</span>

&nbsp;                   </div>

&nbsp;               </div>

&nbsp;               <div class="info-item">

&nbsp;                   <div class="info-label">Última Atualização</div>

&nbsp;                   <div class="info-value" id="lastUpdate">Hoje</div>

&nbsp;               </div>

&nbsp;           </div>

&nbsp;       </header>

&nbsp;       

&nbsp;       <div class="tabs-container">

&nbsp;           <div class="tabs-header">

&nbsp;               <button class="tab-button active" data-tab="dashboard">

&nbsp;                   <i class="fas fa-tachometer-alt"></i> Dashboard

&nbsp;               </button>

&nbsp;               <button class="tab-button" data-tab="cadastro" id="cadastroTab">

&nbsp;                   <i class="fas fa-tools"></i> Cadastrar Item

&nbsp;               </button>

&nbsp;               <button class="tab-button" data-tab="catalogo">

&nbsp;                   <i class="fas fa-list"></i> Catálogo de Itens

&nbsp;               </button>

&nbsp;               <button class="tab-button" data-tab="exportar">

&nbsp;                   <i class="fas fa-file-excel"></i> Exportar

&nbsp;               </button>

&nbsp;               <button class="tab-button" data-tab="database" id="databaseTab">

&nbsp;                   <i class="fas fa-database"></i> Banco de Dados

&nbsp;               </button>

&nbsp;           </div>

&nbsp;           

&nbsp;           <!-- Dashboard Tab -->

&nbsp;           <div id="dashboard" class="tab-content active">

&nbsp;               <h2 class="section-title"><i class="fas fa-chart-line"></i> Estatísticas do Sistema</h2>

&nbsp;               

&nbsp;               <div class="cards-container">

&nbsp;                   <div class="card">

&nbsp;                       <h3 class="card-title"><i class="fas fa-boxes"></i> Status dos Itens</h3>

&nbsp;                       <div class="progress-container">

&nbsp;                           <div class="progress-label">

&nbsp;                               <span>Disponíveis</span>

&nbsp;                               <span id="availablePercent">0%</span>

&nbsp;                           </div>

&nbsp;                           <div class="progress-bar">

&nbsp;                               <div class="progress-fill actual" id="availableBar" style="width: 0%"></div>

&nbsp;                           </div>

&nbsp;                       </div>

&nbsp;                       <div class="progress-container">

&nbsp;                           <div class="progress-label">

&nbsp;                               <span>Em Uso</span>

&nbsp;                               <span id="inUsePercent">0%</span>

&nbsp;                           </div>

&nbsp;                           <div class="progress-bar">

&nbsp;                               <div class="progress-fill planned" id="inUseBar" style="width: 0%"></div>

&nbsp;                           </div>

&nbsp;                       </div>

&nbsp;                       <div class="progress-container">

&nbsp;                           <div class="progress-label">

&nbsp;                               <span>Manutenção</span>

&nbsp;                               <span id="maintenancePercent">0%</span>

&nbsp;                           </div>

&nbsp;                           <div class="progress-bar">

&nbsp;                               <div class="progress-fill" id="maintenanceBar" style="width: 0%; background-color: var(--warning-color)"></div>

&nbsp;                           </div>

&nbsp;                       </div>

&nbsp;                       <div class="progress-container">

&nbsp;                           <div class="progress-label">

&nbsp;                               <span>Danificados</span>

&nbsp;                               <span id="damagedPercent">0%</span>

&nbsp;                           </div>

&nbsp;                           <div class="progress-bar">

&nbsp;                               <div class="progress-fill" id="damagedBar" style="width: 0%; background-color: var(--danger-color)"></div>

&nbsp;                           </div>

&nbsp;                       </div>

&nbsp;                   </div>

&nbsp;                   

&nbsp;                   <div class="card">

&nbsp;                       <h3 class="card-title"><i class="fas fa-money-bill-wave"></i> Valor por Categoria</h3>

&nbsp;                       <div id="valueStats">

&nbsp;                           <p style="text-align: center; color: var(--gray-color); padding: 20px 0;">Carregando dados...</p>

&nbsp;                       </div>

&nbsp;                   </div>

&nbsp;                   

&nbsp;                   <div class="card">

&nbsp;                       <h3 class="card-title"><i class="fas fa-exclamation-triangle"></i> Itens com Estoque Baixo</h3>

&nbsp;                       <div id="lowStockItems">

&nbsp;                           <p style="text-align: center; color: var(--gray-color); padding: 20px 0;">Carregando dados...</p>

&nbsp;                       </div>

&nbsp;                   </div>

&nbsp;               </div>

&nbsp;               

&nbsp;               <div class="chart-container">

&nbsp;                   <h3 class="chart-title"><i class="fas fa-chart-bar"></i> Distribuição por Localização</h3>

&nbsp;                   <canvas id="locationChart"></canvas>

&nbsp;               </div>

&nbsp;               

&nbsp;               <div class="card" id="backupCard">

&nbsp;                   <h3 class="card-title"><i class="fas fa-download"></i> Backup Rápido</h3>

&nbsp;                   <p style="margin-bottom: 15px;">Faça um backup completo dos seus dados localmente.</p>

&nbsp;                   <div class="btn-group">

&nbsp;                       <button type="button" class="btn backup-btn" id="backupBtn">

&nbsp;                           <i class="fas fa-download"></i> Fazer Backup

&nbsp;                       </button>

&nbsp;                       <button type="button" class="btn btn-warning" id="restoreBtn">

&nbsp;                           <i class="fas fa-upload"></i> Restaurar Backup

&nbsp;                       </button>

&nbsp;                   </div>

&nbsp;                   <input type="file" id="restoreFileInput" accept=".json" style="display: none;">

&nbsp;               </div>

&nbsp;           </div>

&nbsp;           

&nbsp;           <!-- Cadastro Tab -->

&nbsp;           <div id="cadastro" class="tab-content">

&nbsp;               <h2 class="section-title"><i class="fas fa-plus-circle"></i> Cadastrar Novo Item</h2>

&nbsp;               

&nbsp;               <div class="form-container">

&nbsp;                   <form id="toolForm">

&nbsp;                       <h4 style="color: var(--primary-color); margin-bottom: 20px; padding-bottom: 10px; border-bottom: 2px solid var(--light-color);">

&nbsp;                           <i class="fas fa-info-circle"></i> Informações Básicas

&nbsp;                       </h4>

&nbsp;                       

&nbsp;                       <div class="form-row">

&nbsp;                           <div class="form-group">

&nbsp;                               <label for="toolName" class="required">Nome do Produto</label>

&nbsp;                               <input type="text" id="toolName" required maxlength="200" placeholder="Ex: Martelo de Borracha">

&nbsp;                               <div class="error-message" id="toolNameError">O nome do produto é obrigatório</div>

&nbsp;                           </div>

&nbsp;                           <div class="form-group">

&nbsp;                               <label for="toolCode" class="required">Código</label>

&nbsp;                               <input type="text" id="toolCode" required maxlength="50" placeholder="Ex: MART-001">

&nbsp;                               <div class="error-message" id="toolCodeError">O código é obrigatório</div>

&nbsp;                           </div>

&nbsp;                           <div class="form-group">

&nbsp;                               <label for="patrimonioNumber">Número do Patrimônio</label>

&nbsp;                               <input type="text" id="patrimonioNumber" maxlength="50" placeholder="Ex: PAT-2023-001">

&nbsp;                           </div>

&nbsp;                       </div>

&nbsp;                       

&nbsp;                       <div class="form-row">

&nbsp;                           <div class="form-group">

&nbsp;                               <label for="ncmCode">N.C.M. (Nomenclatura Comum do Mercosul)</label>

&nbsp;                               <input type="text" id="ncmCode" maxlength="20" placeholder="Ex: 8205.70.00 (opcional)">

&nbsp;                           </div>

&nbsp;                           <div class="form-group">

&nbsp;                               <label for="toolCategory" class="required">Categoria</label>

&nbsp;                               <select id="toolCategory" required>

&nbsp;                                   <option value="">Selecione uma categoria</option>

&nbsp;                                   <option value="Ferramentas Elétricas">Ferramentas Elétricas</option>

&nbsp;                                   <option value="Ferramentas Manuais">Ferramentas Manuais</option>

&nbsp;                                   <option value="Equipamentos de Segurança">Equipamentos de Segurança</option>

&nbsp;                                   <option value="Máquinas">Máquinas</option>

&nbsp;                                   <option value="Material de Consumo">Material de Consumo</option>

&nbsp;                                   <option value="EPI">EPI (Equipamento de Proteção Individual)</option>

&nbsp;                                   <option value="Informática">Informática</option>

&nbsp;                                   <option value="Veículos">Veículos</option>

&nbsp;                                   <option value="Outros">Outros</option>

&nbsp;                               </select>

&nbsp;                               <div class="error-message" id="toolCategoryError">Selecione uma categoria</div>

&nbsp;                           </div>

&nbsp;                           <div class="form-group">

&nbsp;                               <label for="toolStatus" class="required">Status</label>

&nbsp;                               <select id="toolStatus" required>

&nbsp;                                   <option value="Disponível">Disponível</option>

&nbsp;                                   <option value="Em Uso">Em Uso</option>

&nbsp;                                   <option value="Manutenção">Em Manutenção</option>

&nbsp;                                   <option value="Danificado">Danificado</option>

&nbsp;                                   <option value="Reservado">Reservado</option>

&nbsp;                                   <option value="Descartado">Descartado</option>

&nbsp;                               </select>

&nbsp;                               <div class="error-message" id="toolStatusError">Selecione um status</div>

&nbsp;                           </div>

&nbsp;                       </div>

&nbsp;                       

&nbsp;                       <h4 style="color: var(--primary-color); margin: 30px 0 20px 0; padding-bottom: 10px; border-bottom: 2px solid var(--light-color);">

&nbsp;                           <i class="fas fa-map-marker-alt"></i> Localização e Condição

&nbsp;                       </h4>

&nbsp;                       

&nbsp;                       <div class="form-row">

&nbsp;                           <div class="form-group">

&nbsp;                               <label for="toolLocation" class="required">Localização</label>

&nbsp;                               <select id="toolLocation" required>

&nbsp;                                   <option value="">Selecione uma localização</option>

&nbsp;                                   <option value="Almoxarifado Central">Almoxarifado Central</option>

&nbsp;                                   <option value="Container Mecânica">Container Mecânica</option>

&nbsp;                                   <option value="Container Elétrica">Container Elétrica</option>

&nbsp;                                   <option value="Oficina">Oficina</option>

&nbsp;                                   <option value="Campo">Campo</option>

&nbsp;                                   <option value="Caminhão">Caminhão</option>

&nbsp;                                   <option value="Kombi de Serviço">Kombi de Serviço</option>

&nbsp;                                   <option value="Escritório">Escritório</option>                                    

&nbsp;                                   <option value="Depósito">Depósito</option>

&nbsp;                               </select>

&nbsp;                               <div class="error-message" id="toolLocationError">Selecione uma localização</div>

&nbsp;                           </div>

&nbsp;                           <div class="form-group">

&nbsp;                               <label for="toolCondition" class="required">Condição</label>

&nbsp;                               <select id="toolCondition" required>

&nbsp;                                   <option value="Novo">Novo</option>

&nbsp;                                   <option value="Bom">Bom</option>

&nbsp;                                   <option value="Regular">Regular</option>

&nbsp;                                   <option value="Precisa de Reparo">Precisa de Reparo</option>

&nbsp;                                   <option value="Inutilizável">Inutilizável</option>

&nbsp;                               </select>

&nbsp;                               <div class="error-message" id="toolConditionError">Selecione uma condição</div>

&nbsp;                           </div>

&nbsp;                           <div class="form-group">

&nbsp;                               <label for="notaFiscal">Nº da Nota Fiscal</label>

&nbsp;                               <input type="text" id="notaFiscal" maxlength="50" placeholder="Ex: NF-2023-001234">

&nbsp;                           </div>

&nbsp;                       </div>

&nbsp;                       

&nbsp;                       <h4 style="color: var(--primary-color); margin: 30px 0 20px 0; padding-bottom: 10px; border-bottom: 2px solid var(--light-color);">

&nbsp;                           <i class="fas fa-calculator"></i> Dados Financeiros e Estoque

&nbsp;                       </h4>

&nbsp;                       

&nbsp;                       <div class="form-row">

&nbsp;                           <div class="form-group">

&nbsp;                               <label for="unidadeMedida">Unidade de Medida</label>

&nbsp;                               <select id="unidadeMedida">

&nbsp;                                   <option value="UN">UN (Unidade)</option>

&nbsp;                                   <option value="PC">PC (Peça)</option>

&nbsp;                                   <option value="CX">CX (Caixa)</option>

&nbsp;                                   <option value="KG">KG (Quilograma)</option>

&nbsp;                                   <option value="M">M (Metro)</option>

&nbsp;                                   <option value="L">L (Litro)</option>

&nbsp;                                   <option value="PAR">PAR (Par)</option>

&nbsp;                                   <option value="JGO">JGO (Jogo)</option>

&nbsp;                                   <option value="HR">HR (Hora)</option>

&nbsp;                               </select>

&nbsp;                           </div>

&nbsp;                           <div class="form-group money-input">

&nbsp;                               <label for="preco">Preço Unitário (R$)</label>

&nbsp;                               <input type="number" id="preco" min="0" step="0.01" placeholder="0,00">

&nbsp;                           </div>

&nbsp;                           <div class="form-group">

&nbsp;                               <label for="quantidadeAtual">Quantidade Atual</label>

&nbsp;                               <input type="number" id="quantidadeAtual" min="0" value="1">

&nbsp;                           </div>

&nbsp;                       </div>

&nbsp;                       

&nbsp;                       <div class="form-row">

&nbsp;                           <div class="form-group">

&nbsp;                               <label for="estoqueMinimo">Estoque Mínimo</label>

&nbsp;                               <input type="number" id="estoqueMinimo" min="0" value="0">

&nbsp;                           </div>

&nbsp;                           <div class="form-group">

&nbsp;                               <label for="estoqueMaximo">Estoque Máximo</label>

&nbsp;                               <input type="number" id="estoqueMaximo" min="0" value="0">

&nbsp;                           </div>

&nbsp;                           <div class="form-group">

&nbsp;                               <label for="dataCadastro">Data do Cadastro</label>

&nbsp;                               <input type="date" id="dataCadastro" value="">

&nbsp;                           </div>

&nbsp;                       </div>

&nbsp;                       

&nbsp;                       <h4 style="color: var(--primary-color); margin: 30px 0 20px 0; padding-bottom: 10px; border-bottom: 2px solid var(--light-color);">

&nbsp;                           <i class="fas fa-align-left"></i> Descrições e Observações

&nbsp;                       </h4>

&nbsp;                       

&nbsp;                       <div class="form-group">

&nbsp;                           <label for="toolDescription">Descrição Detalhada</label>

&nbsp;                           <textarea id="toolDescription" rows="3" maxlength="1000" placeholder="Descreva detalhadamente o produto..."></textarea>

&nbsp;                       </div>

&nbsp;                       

&nbsp;                       <div class="form-group">

&nbsp;                           <label for="toolObservations">Observações</label>

&nbsp;                           <textarea id="toolObservations" rows="2" maxlength="500" placeholder="Observações adicionais..."></textarea>

&nbsp;                       </div>

&nbsp;                   </form>

&nbsp;               </div>

&nbsp;               

&nbsp;               <div class="image-capture-container" id="imageCaptureContainer">

&nbsp;                   <h3 class="section-title"><i class="fas fa-camera"></i> Fotografar Item</h3>

&nbsp;                   

&nbsp;                   <div class="camera-area" id="cameraArea">

&nbsp;                       <div class="camera-placeholder" id="cameraPlaceholder">

&nbsp;                           <i class="fas fa-camera"></i>

&nbsp;                           <p>Nenhuma imagem selecionada</p>

&nbsp;                       </div>

&nbsp;                       <img id="toolImagePreview" style="display: none;">

&nbsp;                   </div>

&nbsp;                   

&nbsp;                   <div class="camera-controls">

&nbsp;                       <button type="button" class="btn btn-primary" id="captureImageBtn">

&nbsp;                           <i class="fas fa-camera"></i> Tirar Foto

&nbsp;                       </button>

&nbsp;                       <button type="button" class="btn btn-warning" id="uploadImageBtn">

&nbsp;                           <i class="fas fa-upload"></i> Carregar Imagem

&nbsp;                       </button>

&nbsp;                       <button type="button" class="btn btn-danger" id="clearImageBtn">

&nbsp;                           <i class="fas fa-trash"></i> Remover Imagem

&nbsp;                       </button>

&nbsp;                   </div>

&nbsp;                   <p style="text-align: center; margin-top: 10px; color: var(--gray-color); font-size: 12px;">

&nbsp;                       Tamanho máximo: 5MB | Formatos: JPG, PNG, GIF

&nbsp;                   </p>

&nbsp;               </div>

&nbsp;               

&nbsp;               <div class="btn-group">

&nbsp;                   <button type="button" class="btn btn-success" id="saveToolBtn">

&nbsp;                       <i class="fas fa-save"></i> Salvar Item

&nbsp;                   </button>

&nbsp;                   <button type="button" class="btn btn-primary" id="saveAndNewBtn">

&nbsp;                       <i class="fas fa-plus-circle"></i> Salvar e Novo

&nbsp;                   </button>

&nbsp;                   <button type="button" class="btn btn-warning" id="clearFormBtn">

&nbsp;                       <i class="fas fa-eraser"></i> Limpar Formulário

&nbsp;                   </button>

&nbsp;                   <button type="button" class="btn backup-btn" id="generateQRCodeBtn">

&nbsp;                       <i class="fas fa-qrcode"></i> Gerar QR Code

&nbsp;                   </button>

&nbsp;               </div>

&nbsp;           </div>

&nbsp;           

&nbsp;           <!-- Catálogo Tab -->

&nbsp;           <div id="catalogo" class="tab-content">

&nbsp;               <h2 class="section-title"><i class="fas fa-list"></i> Catálogo de Itens</h2>

&nbsp;               

&nbsp;               <div class="search-box">

&nbsp;                   <i class="fas fa-search"></i>

&nbsp;                   <input type="text" id="searchTool" placeholder="Buscar por nome, código, patrimônio ou categoria...">

&nbsp;               </div>

&nbsp;               

&nbsp;               <div class="btn-group" style="margin-bottom: 20px;">

&nbsp;                   <button type="button" class="btn btn-primary" id="filterAllBtn">

&nbsp;                       <i class="fas fa-filter"></i> Todos

&nbsp;                   </button>

&nbsp;                   <button type="button" class="btn btn-success" id="filterAvailableBtn">

&nbsp;                       <i class="fas fa-check-circle"></i> Disponíveis

&nbsp;                   </button>

&nbsp;                   <button type="button" class="btn btn-warning" id="filterInUseBtn">

&nbsp;                       <i class="fas fa-user-check"></i> Em Uso

&nbsp;                   </button>

&nbsp;                   <button type="button" class="btn btn-danger" id="filterLowStockBtn">

&nbsp;                       <i class="fas fa-exclamation-triangle"></i> Estoque Baixo

&nbsp;                   </button>

&nbsp;                   <button type="button" class="btn btn-secondary" id="syncFromOnlineBtn">

&nbsp;                       <i class="fas fa-cloud-upload-alt"></i> Enviar para a Nuvem

&nbsp;                   </button>

&nbsp;               </div>

&nbsp;               

&nbsp;               <div class="tools-list">

&nbsp;                   <div class="table-container">

&nbsp;                       <table id="toolsTable">

&nbsp;                           <thead>

&nbsp;                               <tr>

&nbsp;                                   <th>QR Code</th>

&nbsp;                                   <th>Código</th>

&nbsp;                                   <th>Nome do Produto</th>

&nbsp;                                   <th>Patrimônio</th>

&nbsp;                                   <th>Categoria</th>

&nbsp;                                   <th>Status</th>

&nbsp;                                   <th>Localização</th>

&nbsp;                                   <th>Condição</th>

&nbsp;                                   <th>Unidade</th>

&nbsp;                                   <th>Estoque</th>

&nbsp;                                   <th>Preço (R$)</th>

&nbsp;                                   <th>Data Cad.</th>

&nbsp;                                   <th>Ações</th>

&nbsp;                               </tr>

&nbsp;                           </thead>

&nbsp;                           <tbody id="toolsTableBody">

&nbsp;                               <tr id="noToolsRow">

&nbsp;                                   <td colspan="13" style="text-align: center; padding: 40px; color: var(--gray-color);">

&nbsp;                                       Nenhum item cadastrado. Clique em "Cadastrar Item" para adicionar.

&nbsp;                                   </td>

&nbsp;                               </tr>

&nbsp;                           </tbody>

&nbsp;                       </table>

&nbsp;                   </div>

&nbsp;               </div>

&nbsp;               

&nbsp;               <div class="storage-info" id="storageInfo">

&nbsp;                   <p><strong>Informações de Armazenamento:</strong></p>

&nbsp;                   <p id="storageInfoText">Carregando informações...</p>

&nbsp;                   <div class="btn-group" style="margin-top: 10px;">

&nbsp;                       <button type="button" class="btn btn-sm btn-warning" id="clearCacheBtn">

&nbsp;                           <i class="fas fa-trash-alt"></i> Limpar Cache Local

&nbsp;                       </button>

&nbsp;                       <button type="button" class="btn btn-sm btn-primary" id="optimizeStorageBtn">

&nbsp;                           <i class="fas fa-compress-alt"></i> Otimizar Armazenamento

&nbsp;                       </button>

&nbsp;                       <button type="button" class="btn btn-sm backup-btn" id="quickBackupBtn">

&nbsp;                           <i class="fas fa-download"></i> Backup Rápido

&nbsp;                       </button>

&nbsp;                   </div>

&nbsp;               </div>

&nbsp;           </div>

&nbsp;           

&nbsp;           <!-- Exportar Tab -->

&nbsp;           <div id="exportar" class="tab-content">

&nbsp;               <h2 class="section-title"><i class="fas fa-file-excel"></i> Exportar Dados</h2>

&nbsp;               

&nbsp;               <div class="card">

&nbsp;                   <h3 class="card-title"><i class="fas fa-download"></i> Exportar Dados</h3>

&nbsp;                   <p style="margin-bottom: 20px;">Exporte todos os itens cadastrados para um arquivo Excel. O arquivo incluirá todas as informações.</p>

&nbsp;                   

&nbsp;                   <div class="form-group">

&nbsp;                       <label for="exportRange">Exportar</label>

&nbsp;                       <select id="exportRange" class="form-control">

&nbsp;                           <option value="all">Todos os itens</option>

&nbsp;                           <option value="available">Apenas disponíveis</option>

&nbsp;                           <option value="inuse">Apenas em uso</option>

&nbsp;                           <option value="maintenance">Apenas em manutenção</option>

&nbsp;                           <option value="lowstock">Apenas estoque baixo</option>

&nbsp;                       </select>

&nbsp;                   </div>

&nbsp;                   

&nbsp;                   <div class="loader" id="exportLoader"></div>

&nbsp;                   

&nbsp;                   <div class="btn-group" style="margin-top: 20px;">

&nbsp;                       <button type="button" class="btn btn-success" id="exportExcelBtn">

&nbsp;                           <i class="fas fa-file-excel"></i> Exportar para Excel

&nbsp;                       </button>

&nbsp;                       <button type="button" class="btn btn-primary" id="exportCSVBtn">

&nbsp;                           <i class="fas fa-file-csv"></i> Exportar para CSV

&nbsp;                       </button>

&nbsp;                       <button type="button" class="btn backup-btn" id="exportJSONBtn">

&nbsp;                           <i class="fas fa-file-code"></i> Exportar para JSON

&nbsp;                       </button>

&nbsp;                   </div>

&nbsp;               </div>

&nbsp;               

&nbsp;               <div class="card">

&nbsp;                   <h3 class="card-title"><i class="fas fa-history"></i> Histórico de Exportações</h3>

&nbsp;                   <div class="export-history" id="exportHistory">

&nbsp;                       <p style="text-align: center; color: var(--gray-color); padding: 20px 0;">

&nbsp;                           Nenhuma exportação realizada ainda

&nbsp;                       </p>

&nbsp;                   </div>

&nbsp;               </div>

&nbsp;           </div>

&nbsp;           

&nbsp;           <!-- Banco de Dados Online Tab -->

&nbsp;           <div id="database" class="tab-content">

&nbsp;               <h2 class="section-title"><i class="fas fa-database"></i> Banco de Dados Online Gratuito</h2>

&nbsp;               

&nbsp;               <div class="config-container">

&nbsp;                   <div class="storage-status">

&nbsp;                       <div class="status-indicator" id="dbStatusIndicator"></div>

&nbsp;                       <h3 id="dbStatusText">Status: Armazenamento Local</h3>

&nbsp;                   </div>

&nbsp;                   

&nbsp;                   <div class="config-step">

&nbsp;                       <h4 class="step-title"><i class="fas fa-cloud"></i> Passo 1: Criar Conta Gratuita no Supabase</h4>

&nbsp;                       <div class="step-content">

&nbsp;                           <p>1. Acesse <a href="https://supabase.com" target="\_blank">supabase.com</a></p>

&nbsp;                           <p>2. Clique em "Start your project"</p>

&nbsp;                           <p>3. Faça login com sua conta GitHub, Google ou email</p>

&nbsp;                           <p>4. Crie um novo projeto (é gratuito!)</p>

&nbsp;                       </div>

&nbsp;                   </div>

&nbsp;                   

&nbsp;                   <div class="config-step">

&nbsp;                       <h4 class="step-title"><i class="fas fa-table"></i> Passo 2: Criar Tabela no Banco de Dados</h4>

&nbsp;                       <div class="step-content">

&nbsp;                           <p>No painel do Supabase, vá para "Table Editor" e crie esta tabela SQL:</p>

&nbsp;                           <div class="code-block">

-- TABELA COMPLETA PARA SISTEMA DE FERRAMENTAS

CREATE TABLE IF NOT EXISTS tools (

&nbsp;   id BIGSERIAL PRIMARY KEY,

&nbsp;   name TEXT NOT NULL,

&nbsp;   code TEXT NOT NULL UNIQUE,

&nbsp;   patrimonio TEXT,

&nbsp;   ncm TEXT NOT NULL,

&nbsp;   category TEXT NOT NULL,

&nbsp;   status TEXT NOT NULL,

&nbsp;   location TEXT NOT NULL,

&nbsp;   condition TEXT NOT NULL,

&nbsp;   nota\_fiscal TEXT,

&nbsp;   unidade TEXT,

&nbsp;   preco NUMERIC(10,2),

&nbsp;   quantidade INTEGER DEFAULT 1,

&nbsp;   estoque\_minimo INTEGER DEFAULT 0,

&nbsp;   estoque\_maximo INTEGER DEFAULT 0,

&nbsp;   description TEXT,

&nbsp;   observations TEXT,

&nbsp;   image\_url TEXT,

&nbsp;   data\_cadastro DATE DEFAULT CURRENT\_DATE,

&nbsp;   created\_at TIMESTAMPTZ DEFAULT NOW(),

&nbsp;   updated\_at TIMESTAMPTZ DEFAULT NOW()

);

&nbsp;                           </div>

&nbsp;                           <button type="button" class="btn btn-primary" id="createTableBtn">

&nbsp;                               <i class="fas fa-plus-circle"></i> Criar Tabela Automaticamente

&nbsp;                           </button>

&nbsp;                           <div id="tableCreationResult" style="margin-top: 10px;"></div>

&nbsp;                       </div>

&nbsp;                   </div>

&nbsp;                   

&nbsp;                   <div class="config-step">

&nbsp;                       <h4 class="step-title"><i class="fas fa-key"></i> Passo 3: Configurar Chaves de API</h4>

&nbsp;                       <div class="step-content">

&nbsp;                           <p>No painel do Supabase, vá para "Settings" → "API" e copie:</p>

&nbsp;                           

&nbsp;                           <div class="form-group">

&nbsp;                               <label for="supabaseUrl">URL do Projeto</label>

&nbsp;                               <input type="text" id="supabaseUrl" placeholder="https://seu-projeto.supabase.co">

&nbsp;                           </div>

&nbsp;                           

&nbsp;                           <div class="form-group">

&nbsp;                               <label for="supabaseKey">Chave da API (anon/public)</label>

&nbsp;                               <input type="text" id="supabaseKey" placeholder="sua-chave-publica-aqui">

&nbsp;                           </div>

&nbsp;                           

&nbsp;                           <div class="btn-group">

&nbsp;                               <button type="button" class="btn btn-success" id="saveConfigBtn">

&nbsp;                                   <i class="fas fa-save"></i> Salvar Configuração

&nbsp;                               </button>

&nbsp;                               <button type="button" class="btn btn-primary" id="testConnectionBtn">

&nbsp;                                   <i class="fas fa-plug"></i> Testar Conexão

&nbsp;                               </button>

&nbsp;                               <button type="button" class="btn btn-warning" id="resetConfigBtn">

&nbsp;                                   <i class="fas fa-redo"></i> Redefinir Configuração

&nbsp;                               </button>

&nbsp;                           </div>

&nbsp;                       </div>

&nbsp;                   </div>

&nbsp;                   

&nbsp;                   <div class="config-step">

&nbsp;                       <h4 class="step-title"><i class="fas fa-sync-alt"></i> Passo 4: Sincronizar Dados</h4>

&nbsp;                       <div class="step-content">

&nbsp;                           <p>Sincronize seus dados locais com o banco de dados online:</p>

&nbsp;                           <div class="btn-group">

&nbsp;                               <button type="button" class="btn btn-success" id="syncToOnlineBtn">

&nbsp;                                   <i class="fas fa-cloud-upload-alt"></i> Enviar para Nuvem

&nbsp;                               </button>

&nbsp;                               <button type="button" class="btn btn-primary" id="syncFromOnlineBtn2">

&nbsp;                                   <i class="fas fa-cloud-download-alt"></i> Buscar da Nuvem

&nbsp;                               </button>

&nbsp;                               <button type="button" class="btn btn-warning" id="syncBothBtn">

&nbsp;                                   <i class="fas fa-exchange-alt"></i> Sincronizar Ambos

&nbsp;                               </button>

&nbsp;                           </div>

&nbsp;                           

&nbsp;                           <div class="storage-info" style="margin-top: 15px;">

&nbsp;                               <p><strong>Configuração de Sincronização:</strong></p>

&nbsp;                               <div class="form-group">

&nbsp;                                   <label for="syncLimit">Limite de itens por sincronização:</label>

&nbsp;                                   <select id="syncLimit" class="form-control">

&nbsp;                                       <option value="50">50 itens</option>

&nbsp;                                       <option value="100" selected>100 itens</option>

&nbsp;                                       <option value="200">200 itens</option>

&nbsp;                                       <option value="500">500 itens</option>

&nbsp;                                       <option value="0">Todos (não recomendado)</option>

&nbsp;                                   </select>

&nbsp;                               </div>

&nbsp;                           </div>

&nbsp;                       </div>

&nbsp;                   </div>

&nbsp;               </div>

&nbsp;               

&nbsp;               <div class="card">

&nbsp;                   <h3 class="card-title"><i class="fas fa-info-circle"></i> Informações do Banco de Dados</h3>

&nbsp;                   <div id="dbInfo">

&nbsp;                       <p style="text-align: center; color: var(--gray-color); padding: 20px 0;">

&nbsp;                           Configure o banco de dados para ver informações aqui

&nbsp;                       </p>

&nbsp;                   </div>

&nbsp;               </div>

&nbsp;           </div>

&nbsp;       </div>

&nbsp;       

&nbsp;       <!-- Modal para visualizar item -->

&nbsp;       <div id="toolModal" class="modal">

&nbsp;           <div class="modal-content">

&nbsp;               <div class="modal-header">

&nbsp;                   <h3 class="modal-title">Detalhes do Item</h3>

&nbsp;                   <button class="modal-close" id="closeModalBtn">\&times;</button>

&nbsp;               </div>

&nbsp;               <div class="modal-body" id="toolModalBody">

&nbsp;                   <!-- Conteúdo do modal será preenchido via JavaScript -->

&nbsp;               </div>

&nbsp;           </div>

&nbsp;       </div>

&nbsp;       

&nbsp;       <!-- Modal QR Code -->

&nbsp;       <div id="qrModal" class="modal">

&nbsp;           <div class="modal-content">

&nbsp;               <div class="modal-header">

&nbsp;                   <h3 class="modal-title">QR Code do Item</h3>

&nbsp;                   <button class="modal-close" id="closeQRModalBtn">\&times;</button>

&nbsp;               </div>

&nbsp;               <div class="modal-body" id="qrModalBody">

&nbsp;                   <!-- QR Code será gerado aqui -->

&nbsp;               </div>

&nbsp;           </div>

&nbsp;       </div>

&nbsp;       

&nbsp;       <!-- Input para upload de imagem (oculto) -->

&nbsp;       <input type="file" id="imageUploadInput" accept="image/\*" capture="environment" style="display: none;">

&nbsp;       

&nbsp;       <!-- Input para restaurar backup (oculto) -->

&nbsp;       <input type="file" id="restoreFileInput" accept=".json" style="display: none;">

&nbsp;   </div>



&nbsp;   <footer class="site-footer">

&nbsp;       <div class="footer-content">

&nbsp;           <p>Desenvolvido por Fábio Mendes Rodrigues, Planejador da F.W. Company</p>

&nbsp;           <p class="footer-version">Versão 1.0\_rev03 | Última atualização: <span id="currentDate"></span></p>

&nbsp;       </div>

&nbsp;   </footer>



&nbsp;   <script>

&nbsp;       // ============================================

&nbsp;       // SISTEMA DE AUTENTICAÇÃO E GERENCIAMENTO

&nbsp;       // ============================================



&nbsp;       // Dados de usuários

&nbsp;       const users = {

&nbsp;           // DEV - Acesso total

&nbsp;           'fabio@fwcompany.com.br': {

&nbsp;               password: 'FabioFW123@',

&nbsp;               role: 'dev',

&nbsp;               name: 'Fábio Mendes',

&nbsp;               email: 'fabio@fwcompany.com.br'

&nbsp;           },

&nbsp;           

&nbsp;           // Almoxarife - Acesso Dashboard, Cadastro, Catálogo, Exportar

&nbsp;           'emerson.silva@fwcompany.com.br': {

&nbsp;               password: 'EmersonFW1@',

&nbsp;               role: 'almoxarife',

&nbsp;               name: 'Emerson Silva',

&nbsp;               email: 'emerson.silva@fwcompany.com.br',

&nbsp;               supabaseConfig: {

&nbsp;                   url: 'https://azlgjkjzitbolyfyyaip.supabase.co',

&nbsp;                   key: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF6bGdqa2p6aXRib2x5Znl5YWlwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjY0MTQ1NjcsImV4cCI6MjA4MTk5MDU2N30.PefjFNb5Phq2ZkR26-RlJdb-pnFUbYp1PxjYwI1LUpA'

&nbsp;               }

&nbsp;           },

&nbsp;           

&nbsp;           // Usuário Genérico - Apenas consulta

&nbsp;           'fwuser': {

&nbsp;               password: 'User123',

&nbsp;               role: 'user',

&nbsp;               name: 'Usuário Genérico',

&nbsp;               email: 'fwuser@fwcompany.com.br'

&nbsp;           },

&nbsp;           // ← ADICIONE AQUI O NOVO USUÁRIO ↓

&nbsp;           'raquel@fwcompany.com.br': {

&nbsp;               password: 'RaqueL1234',

&nbsp;               role: 'user',  // Nível genérico (apenas consulta)

&nbsp;               name: 'Raquel',

&nbsp;               email: 'raquel@fwcompany.com.br'

&nbsp;   }

&nbsp;       };



&nbsp;       // Estado da aplicação

&nbsp;       let currentUser = null;

&nbsp;       let tools = \[];

&nbsp;       let currentToolImage = null;

&nbsp;       let chartInstance = null;

&nbsp;       let isEditing = false;

&nbsp;       let editingToolId = null;

&nbsp;       let supabaseClient = null;

&nbsp;       let isOnlineMode = false;

&nbsp;       let currentStorageType = 'localStorage';



&nbsp;       // Configuração do Supabase padrão

&nbsp;       const SUPABASE\_URL = 'https://seu-projeto.supabase.co';

&nbsp;       const SUPABASE\_ANON\_KEY = 'sua-chave-publica-aqui';



&nbsp;       // Configurações locais

&nbsp;       let dbConfig = {

&nbsp;           url: SUPABASE\_URL,

&nbsp;           key: SUPABASE\_ANON\_KEY

&nbsp;       };



&nbsp;       // ============================================

&nbsp;       // FUNÇÕES DE AUTENTICAÇÃO

&nbsp;       // ============================================



&nbsp;       // Função de login

&nbsp;       function login() {

&nbsp;           const email = document.getElementById('loginEmail').value.trim();

&nbsp;           const password = document.getElementById('loginPassword').value;

&nbsp;           const errorDiv = document.getElementById('loginError');

&nbsp;           

&nbsp;           // Verificar credenciais

&nbsp;           let user = null;

&nbsp;           let userKey = null;

&nbsp;           

&nbsp;           // Verificar por email

&nbsp;           if (users\[email]) {

&nbsp;               user = users\[email];

&nbsp;               userKey = email;

&nbsp;           }

&nbsp;           

&nbsp;           // Se não encontrou por email, tentar por nome de usuário

&nbsp;           if (!user \&\& email === 'fwuser') {

&nbsp;               user = users\['fwuser'];

&nbsp;               userKey = 'fwuser';

&nbsp;           }

&nbsp;           

&nbsp;           if (user \&\& user.password === password) {

&nbsp;               // Login bem-sucedido

&nbsp;               currentUser = {

&nbsp;                   ...user,

&nbsp;                   key: userKey

&nbsp;               };

&nbsp;               

&nbsp;               // Salvar sessão

&nbsp;               localStorage.setItem('currentUser', JSON.stringify(currentUser));

&nbsp;               

&nbsp;               // Configurar dbConfig baseado no usuário

&nbsp;               if (user.supabaseConfig) {

&nbsp;                   dbConfig = user.supabaseConfig;

&nbsp;                   localStorage.setItem('supabaseConfig', JSON.stringify(dbConfig));

&nbsp;               } else {

&nbsp;                   const savedConfig = localStorage.getItem('supabaseConfig');

&nbsp;                   if (savedConfig) {

&nbsp;                       dbConfig = JSON.parse(savedConfig);

&nbsp;                   }

&nbsp;               }

&nbsp;               

&nbsp;               // Mostrar dashboard

&nbsp;               showDashboard();

&nbsp;               

&nbsp;               // Configurar interface baseada no perfil

&nbsp;               setupUserInterface();

&nbsp;               

&nbsp;               // Inicializar sistema

&nbsp;               initializeSystem();

&nbsp;               

&nbsp;           } else {

&nbsp;               // Login falhou

&nbsp;               errorDiv.classList.add('show');

&nbsp;               setTimeout(() => {

&nbsp;                   errorDiv.classList.remove('show');

&nbsp;               }, 3000);

&nbsp;           }

&nbsp;       }



&nbsp;       // Logout

&nbsp;       function logout() {

&nbsp;           if (confirm('Deseja realmente sair do sistema?')) {

&nbsp;               currentUser = null;

&nbsp;               localStorage.removeItem('currentUser');

&nbsp;               showLogin();

&nbsp;           }

&nbsp;       }



&nbsp;       // Verificar sessão ativa

&nbsp;       function checkSession() {

&nbsp;           const savedUser = localStorage.getItem('currentUser');

&nbsp;           if (savedUser) {

&nbsp;               try {

&nbsp;                   currentUser = JSON.parse(savedUser);

&nbsp;                   

&nbsp;                   // Verificar se o usuário ainda existe

&nbsp;                   if (users\[currentUser.key] \&\& users\[currentUser.key].password === currentUser.password) {

&nbsp;                       // Configurar dbConfig

&nbsp;                       if (currentUser.supabaseConfig) {

&nbsp;                           dbConfig = currentUser.supabaseConfig;

&nbsp;                       } else {

&nbsp;                           const savedConfig = localStorage.getItem('supabaseConfig');

&nbsp;                           if (savedConfig) {

&nbsp;                               dbConfig = JSON.parse(savedConfig);

&nbsp;                           }

&nbsp;                       }

&nbsp;                       

&nbsp;                       showDashboard();

&nbsp;                       setupUserInterface();

&nbsp;                       initializeSystem();

&nbsp;                       return;

&nbsp;                   }

&nbsp;               } catch (e) {

&nbsp;                   console.error('Erro ao restaurar sessão:', e);

&nbsp;               }

&nbsp;           }

&nbsp;           

&nbsp;           // Se não houver sessão válida, mostrar login

&nbsp;           showLogin();

&nbsp;       }



&nbsp;       // Mostrar tela de login

&nbsp;       function showLogin() {

&nbsp;           document.getElementById('loginScreen').style.display = 'flex';

&nbsp;           document.getElementById('dashboardScreen').style.display = 'none';

&nbsp;           

&nbsp;           // Limpar campos

&nbsp;           document.getElementById('loginEmail').value = '';

&nbsp;           document.getElementById('loginPassword').value = '';

&nbsp;       }



&nbsp;       // Mostrar dashboard

&nbsp;       function showDashboard() {

&nbsp;           document.getElementById('loginScreen').style.display = 'none';

&nbsp;           document.getElementById('dashboardScreen').style.display = 'block';

&nbsp;           

&nbsp;           // Atualizar informações do usuário

&nbsp;           if (currentUser) {

&nbsp;               document.getElementById('userWelcomeText').textContent = `Bem-vindo, ${currentUser.name}`;

&nbsp;               document.getElementById('userRoleBadge').textContent = getRoleDisplayName(currentUser.role);

&nbsp;               document.getElementById('userRoleBadge').className = `user-badge ${getRoleBadgeClass(currentUser.role)}`;

&nbsp;           }

&nbsp;       }



&nbsp;       // Configurar interface baseada no perfil

&nbsp;       function setupUserInterface() {

&nbsp;           if (!currentUser) return;

&nbsp;           

&nbsp;           const role = currentUser.role;

&nbsp;           

&nbsp;           // Esconder elementos baseado no perfil

&nbsp;           const cadastroTab = document.getElementById('cadastroTab');

&nbsp;           const databaseTab = document.getElementById('databaseTab');

&nbsp;           const backupCard = document.getElementById('backupCard');

&nbsp;           const storageInfo = document.getElementById('storageInfo');

&nbsp;           const syncButton = document.getElementById('syncFromOnlineBtn');

&nbsp;           const imageCaptureContainer = document.getElementById('imageCaptureContainer');

&nbsp;           const exportButtons = document.getElementById('exportExcelBtn').parentElement;

&nbsp;           

&nbsp;           // Configurar botão de sincronização para almoxarife

&nbsp;           if (syncButton) {

&nbsp;               if (role === 'almoxarife') {

&nbsp;                   syncButton.innerHTML = '<i class="fas fa-cloud-upload-alt"></i> Enviar para a Nuvem';

&nbsp;               }

&nbsp;           }

&nbsp;           

&nbsp;           switch(role) {

&nbsp;               case 'dev':

&nbsp;                   // Acesso total - mostrar tudo

&nbsp;                   cadastroTab.classList.remove('hidden');

&nbsp;                   databaseTab.classList.remove('hidden');

&nbsp;                   if (backupCard) backupCard.classList.remove('hidden');

&nbsp;                   if (storageInfo) storageInfo.classList.remove('hidden');

&nbsp;                   if (imageCaptureContainer) imageCaptureContainer.classList.remove('hidden');

&nbsp;                   break;

&nbsp;                   

&nbsp;               case 'almoxarife':

&nbsp;                   // Acesso: Dashboard, Cadastro, Catálogo, Exportar

&nbsp;                   cadastroTab.classList.remove('hidden');

&nbsp;                   databaseTab.classList.add('hidden');

&nbsp;                   if (backupCard) backupCard.classList.add('hidden');

&nbsp;                   if (storageInfo) storageInfo.classList.remove('hidden');

&nbsp;                   if (imageCaptureContainer) imageCaptureContainer.classList.remove('hidden');

&nbsp;                   break;

&nbsp;                   

&nbsp;               case 'user':

&nbsp;                   // Acesso: Dashboard, Catálogo, Exportar (apenas consulta)

&nbsp;                   cadastroTab.classList.add('hidden');

&nbsp;                   databaseTab.classList.add('hidden');

&nbsp;                   if (backupCard) backupCard.classList.add('hidden');

&nbsp;                   if (storageInfo) storageInfo.classList.add('hidden');

&nbsp;                   if (imageCaptureContainer) imageCaptureContainer.classList.add('hidden');

&nbsp;                   

&nbsp;                   // Desabilitar ações nos formulários

&nbsp;                   const formElements = document.querySelectorAll('#toolForm input, #toolForm select, #toolForm textarea');

&nbsp;                   formElements.forEach(el => el.disabled = true);

&nbsp;                   

&nbsp;                   // Esconder botões de ação no catálogo

&nbsp;                   const actionButtons = document.querySelectorAll('.action-btn-edit, .action-btn-delete');

&nbsp;                   actionButtons.forEach(btn => btn.style.display = 'none');

&nbsp;                   break;

&nbsp;           }

&nbsp;       }



&nbsp;       // Funções auxiliares para perfis

&nbsp;       function getRoleDisplayName(role) {

&nbsp;           switch(role) {

&nbsp;               case 'dev': return 'DEV';

&nbsp;               case 'almoxarife': return 'Almoxarife';

&nbsp;               case 'user': return 'Usuário';

&nbsp;               default: return 'Usuário';

&nbsp;           }

&nbsp;       }



&nbsp;       function getRoleBadgeClass(role) {

&nbsp;           switch(role) {

&nbsp;               case 'dev': return 'status-completed';

&nbsp;               case 'almoxarife': return 'status-ontrack';

&nbsp;               case 'user': return 'status-delayed';

&nbsp;               default: return '';

&nbsp;           }

&nbsp;       }



&nbsp;       // ============================================

&nbsp;       // FUNÇÕES PRINCIPAIS DO SISTEMA (MANTIDAS)

&nbsp;       // ============================================



&nbsp;       // Inicializar sistema

&nbsp;       async function initializeSystem() {

&nbsp;           try {

&nbsp;               // Carregar dados locais

&nbsp;               await loadInitialTools();

&nbsp;               // Verificar status do IndexedDB

&nbsp;               await updateIndexedDBStatus();



&nbsp;               // Configurar Supabase se houver credenciais

&nbsp;               if (dbConfig.url \&\& dbConfig.key) {

&nbsp;                   await setupSupabaseClient();

&nbsp;               }

&nbsp;               

&nbsp;               // Atualizar interface

&nbsp;               updateHeaderStats();

&nbsp;               updateStatistics();

&nbsp;               loadToolsList();

&nbsp;               

&nbsp;               // Configurar data atual no formulário

&nbsp;               document.getElementById('dataCadastro').value = new Date().toISOString().split('T')\[0];

&nbsp;               

&nbsp;               showNotification('Sistema inicializado com sucesso!', 'success');

&nbsp;               

&nbsp;           } catch (error) {

&nbsp;               console.error('Erro na inicialização:', error);

&nbsp;               showNotification('Erro ao inicializar sistema.', 'error');

&nbsp;           }

&nbsp;       }



&nbsp;       // Verificar status do IndexedDB

&nbsp;       function checkIndexedDBStatus() {

&nbsp;           return new Promise((resolve) => {

&nbsp;               if (!window.indexedDB) {

&nbsp;                   resolve({ available: false, status: 'Não suportado' });

&nbsp;                   return;

&nbsp;               }



&nbsp;               const request = indexedDB.open('testConnection', 1);

&nbsp;               let dbConnected = false;



&nbsp;               request.onsuccess = () => {

&nbsp;                   dbConnected = true;

&nbsp;                   request.result.close();

&nbsp;                   resolve({ available: true, status: 'Conectado' });

&nbsp;               };



&nbsp;               request.onerror = () => {

&nbsp;                   resolve({ available: false, status: 'Erro' });

&nbsp;               };



&nbsp;               request.onblocked = () => {

&nbsp;                   resolve({ available: false, status: 'Bloqueado' });

&nbsp;               };



&nbsp;               // Timeout para detectar se está muito lento

&nbsp;               setTimeout(() => {

&nbsp;                   if (!dbConnected) {

&nbsp;                       resolve({ available: false, status: 'Timeout' });

&nbsp;                   }

&nbsp;               }, 1000);

&nbsp;           });

&nbsp;       }



&nbsp;       // Função para atualizar o status do IndexedDB na interface

&nbsp;       async function updateIndexedDBStatus() {

&nbsp;           try {

&nbsp;               const status = await checkIndexedDBStatus();

&nbsp;               const statusElement = document.getElementById('indexedDBStatus');

&nbsp;               

&nbsp;               if (status.available \&\& status.status === 'Conectado') {

&nbsp;                   statusElement.textContent = 'Conectado';

&nbsp;                   statusElement.className = 'status-badge status-completed';

&nbsp;               } else {

&nbsp;                   statusElement.textContent = 'Desconectado';

&nbsp;                   statusElement.className = 'status-badge status-delayed';

&nbsp;               }

&nbsp;               

&nbsp;               return status.available;

&nbsp;           } catch (error) {

&nbsp;               console.error('Erro ao verificar IndexedDB:', error);

&nbsp;               const statusElement = document.getElementById('indexedDBStatus');

&nbsp;               statusElement.textContent = 'Erro';

&nbsp;               statusElement.className = 'status-badge status-delayed';

&nbsp;               return false;

&nbsp;           }

&nbsp;       }



&nbsp;       // Carregar dados iniciais

&nbsp;       async function loadInitialTools() {

&nbsp;           try {

&nbsp;               const localData = localStorage.getItem('tools');

&nbsp;               if (localData) {

&nbsp;                   tools = JSON.parse(localData) || \[];

&nbsp;               } else {

&nbsp;                   tools = getExampleTools();

&nbsp;                   await saveTools();

&nbsp;               }

&nbsp;               

&nbsp;               updateStorageInfo();

&nbsp;               

&nbsp;           } catch (error) {

&nbsp;               console.error('Erro ao carregar dados:', error);

&nbsp;               tools = getExampleTools();

&nbsp;           }

&nbsp;       }



&nbsp;       // Salvar dados localmente

&nbsp;       async function saveTools() {

&nbsp;           try {

&nbsp;               localStorage.setItem('tools', JSON.stringify(tools));

&nbsp;               updateStorageInfo();

&nbsp;               return true;

&nbsp;           } catch (error) {

&nbsp;               console.error('Erro ao salvar dados:', error);

&nbsp;               showNotification('Erro ao salvar dados localmente.', 'error');

&nbsp;               return false;

&nbsp;           }

&nbsp;       }



&nbsp;       // Configurar cliente Supabase

&nbsp;       async function setupSupabaseClient() {

&nbsp;           try {

&nbsp;               supabaseClient = supabase.createClient(dbConfig.url, dbConfig.key);

&nbsp;               isOnlineMode = true;

&nbsp;               

&nbsp;               // Testar conexão

&nbsp;               const connectionResult = await testSupabaseConnection();

&nbsp;               

&nbsp;               if (connectionResult.success) {

&nbsp;                   document.getElementById('storageStatus').textContent = 'Online';

&nbsp;                   document.getElementById('storageStatus').className = 'status-badge status-completed';

&nbsp;                   document.getElementById('dbStatusIndicator').className = 'status-indicator online';

&nbsp;                   document.getElementById('dbStatusText').textContent = 'Status: Conectado ao Banco Online';

&nbsp;                   

&nbsp;                   showNotification('Conectado ao banco de dados online!', 'success');

&nbsp;                   updateDatabaseInfo();

&nbsp;                   

&nbsp;                   return true;

&nbsp;               } else {

&nbsp;                   isOnlineMode = false;

&nbsp;                   showNotification(`Modo local: ${connectionResult.message}`, 'warning');

&nbsp;                   return false;

&nbsp;               }

&nbsp;               

&nbsp;           } catch (error) {

&nbsp;               console.error('Erro ao configurar Supabase:', error);

&nbsp;               isOnlineMode = false;

&nbsp;               return false;

&nbsp;           }

&nbsp;       }



&nbsp;       // Testar conexão com Supabase

&nbsp;       async function testSupabaseConnection() {

&nbsp;           try {

&nbsp;               const { data, error } = await supabaseClient

&nbsp;                   .from('tools')

&nbsp;                   .select('count')

&nbsp;                   .limit(1);

&nbsp;               

&nbsp;               if (error) {

&nbsp;                   if (error.message.includes('does not exist')) {

&nbsp;                       return { success: false, message: 'Tabela não existe.' };

&nbsp;                   }

&nbsp;                   throw error;

&nbsp;               }

&nbsp;               

&nbsp;               return { success: true, message: 'Conexão estabelecida!' };

&nbsp;           } catch (error) {

&nbsp;               return { success: false, message: `Erro: ${error.message}` };

&nbsp;           }

&nbsp;       }



&nbsp;       // Criar tabela no Supabase

&nbsp;       async function createTableInSupabase() {

&nbsp;           try {

&nbsp;               const resultElement = document.getElementById('tableCreationResult');

&nbsp;               resultElement.innerHTML = '<p style="color: blue;">Criando tabela...</p>';

&nbsp;               

&nbsp;               // Tentar criar tabela com insert

&nbsp;               const testData = {

&nbsp;                   name: 'Item de Teste',

&nbsp;                   code: 'TEST-' + Date.now(),

&nbsp;                   ncm: '9999.99.99',

&nbsp;                   category: 'Teste',

&nbsp;                   status: 'Disponível',

&nbsp;                   location: 'Teste',

&nbsp;                   condition: 'Novo'

&nbsp;               };

&nbsp;               

&nbsp;               const { error } = await supabaseClient

&nbsp;                   .from('tools')

&nbsp;                   .insert(\[testData]);

&nbsp;               

&nbsp;               if (error \&\& error.message.includes('does not exist')) {

&nbsp;                   resultElement.innerHTML = `

&nbsp;                       <p style="color: red;">❌ Tabela não existe.</p>

&nbsp;                       <p>Execute este SQL no Supabase (SQL Editor):</p>

&nbsp;                       <div class="code-block">

-- TABELA COMPLETA PARA SISTEMA DE FERRAMENTAS

CREATE TABLE IF NOT EXISTS tools (

&nbsp;   id BIGSERIAL PRIMARY KEY,

&nbsp;   name TEXT NOT NULL,

&nbsp;   code TEXT NOT NULL UNIQUE,

&nbsp;   patrimonio TEXT,

&nbsp;   ncm TEXT NOT NULL,

&nbsp;   category TEXT NOT NULL,

&nbsp;   status TEXT NOT NULL,

&nbsp;   location TEXT NOT NULL,

&nbsp;   condition TEXT NOT NULL,

&nbsp;   nota\_fiscal TEXT,

&nbsp;   unidade TEXT,

&nbsp;   preco NUMERIC(10,2),

&nbsp;   quantidade INTEGER DEFAULT 1,

&nbsp;   estoque\_minimo INTEGER DEFAULT 0,

&nbsp;   estoque\_maximo INTEGER DEFAULT 0,

&nbsp;   description TEXT,

&nbsp;   observations TEXT,

&nbsp;   image\_url TEXT,

&nbsp;   data\_cadastro DATE DEFAULT CURRENT\_DATE,

&nbsp;   created\_at TIMESTAMPTZ DEFAULT NOW(),

&nbsp;   updated\_at TIMESTAMPTZ DEFAULT NOW()

);

&nbsp;                       </div>

&nbsp;                   `;

&nbsp;                   return false;

&nbsp;               } else {

&nbsp;                   // Excluir item de teste

&nbsp;                   await supabaseClient

&nbsp;                       .from('tools')

&nbsp;                       .delete()

&nbsp;                       .eq('code', testData.code);

&nbsp;                   

&nbsp;                   resultElement.innerHTML = '<p style="color: green;">✅ Tabela verificada/criada com sucesso!</p>';

&nbsp;                   showNotification('Tabela verificada com sucesso!', 'success');

&nbsp;                   updateDatabaseInfo();

&nbsp;                   return true;

&nbsp;               }

&nbsp;           } catch (error) {

&nbsp;               console.error('Erro ao criar tabela:', error);

&nbsp;               const resultElement = document.getElementById('tableCreationResult');

&nbsp;               resultElement.innerHTML = `<p style="color: red;">❌ Erro: ${error.message}</p>`;

&nbsp;               return false;

&nbsp;           }

&nbsp;       }



&nbsp;       // ============================================

&nbsp;       // FUNÇÕES DE INTERFACE (MANTIDAS)

&nbsp;       // ============================================



&nbsp;       // Atualizar cabeçalho

&nbsp;       function updateHeaderStats() {

&nbsp;           document.getElementById('totalTools').textContent = tools.length;

&nbsp;           

&nbsp;           // Calcular valor total

&nbsp;           const totalValue = tools.reduce((sum, tool) => {

&nbsp;               const preco = parseFloat(tool.preco) || 0;

&nbsp;               const quantidade = parseInt(tool.quantidade) || 1;

&nbsp;               return sum + (preco \* quantidade);

&nbsp;           }, 0);

&nbsp;           

&nbsp;           document.getElementById('totalValue').textContent = formatCurrency(totalValue);

&nbsp;           document.getElementById('lastUpdate').textContent = new Date().toLocaleDateString('pt-BR');

&nbsp;       }



&nbsp;       // Atualizar informações de armazenamento

&nbsp;       function updateStorageInfo() {

&nbsp;           const storageInfoText = document.getElementById('storageInfoText');

&nbsp;           if (storageInfoText) {

&nbsp;               const dataSize = JSON.stringify(tools).length;

&nbsp;               const sizeKB = Math.round(dataSize / 1024);

&nbsp;               storageInfoText.textContent = `Itens: ${tools.length} | Tamanho: ${sizeKB} KB`;

&nbsp;           }

&nbsp;       }



&nbsp;       // Atualizar estatísticas

&nbsp;       function updateStatistics() {

&nbsp;           const total = tools.length;

&nbsp;           

&nbsp;           if (total === 0) {

&nbsp;               resetStats();

&nbsp;               return;

&nbsp;           }

&nbsp;           

&nbsp;           const availableCount = tools.filter(tool => tool.status === 'Disponível').length;

&nbsp;           const inUseCount = tools.filter(tool => tool.status === 'Em Uso').length;

&nbsp;           const maintenanceCount = tools.filter(tool => tool.status === 'Manutenção').length;

&nbsp;           const damagedCount = tools.filter(tool => tool.status === 'Danificado').length;

&nbsp;           

&nbsp;           updateProgressBars(total, availableCount, inUseCount, maintenanceCount, damagedCount);

&nbsp;           updateValueStats();

&nbsp;           updateLowStockItems();

&nbsp;           updateLocationChart();

&nbsp;       }



&nbsp;       function resetStats() {

&nbsp;           document.getElementById('availablePercent').textContent = '0%';

&nbsp;           document.getElementById('inUsePercent').textContent = '0%';

&nbsp;           document.getElementById('maintenancePercent').textContent = '0%';

&nbsp;           document.getElementById('damagedPercent').textContent = '0%';

&nbsp;           

&nbsp;           document.getElementById('availableBar').style.width = '0%';

&nbsp;           document.getElementById('inUseBar').style.width = '0%';

&nbsp;           document.getElementById('maintenanceBar').style.width = '0%';

&nbsp;           document.getElementById('damagedBar').style.width = '0%';

&nbsp;           

&nbsp;           document.getElementById('valueStats').innerHTML = '<p style="text-align: center; color: var(--gray-color); padding: 20px 0;">Nenhum item cadastrado</p>';

&nbsp;           document.getElementById('lowStockItems').innerHTML = '<p style="text-align: center; color: var(--gray-color); padding: 20px 0;">Nenhum item cadastrado</p>';

&nbsp;           

&nbsp;           if (chartInstance) {

&nbsp;               chartInstance.destroy();

&nbsp;           }

&nbsp;       }



&nbsp;       function updateProgressBars(total, available, inUse, maintenance, damaged) {

&nbsp;           const availablePercent = Math.round((available / total) \* 100);

&nbsp;           const inUsePercent = Math.round((inUse / total) \* 100);

&nbsp;           const maintenancePercent = Math.round((maintenance / total) \* 100);

&nbsp;           const damagedPercent = Math.round((damaged / total) \* 100);

&nbsp;           

&nbsp;           document.getElementById('availablePercent').textContent = `${availablePercent}%`;

&nbsp;           document.getElementById('inUsePercent').textContent = `${inUsePercent}%`;

&nbsp;           document.getElementById('maintenancePercent').textContent = `${maintenancePercent}%`;

&nbsp;           document.getElementById('damagedPercent').textContent = `${damagedPercent}%`;

&nbsp;           

&nbsp;           document.getElementById('availableBar').style.width = `${availablePercent}%`;

&nbsp;           document.getElementById('inUseBar').style.width = `${inUsePercent}%`;

&nbsp;           document.getElementById('maintenanceBar').style.width = `${maintenancePercent}%`;

&nbsp;           document.getElementById('damagedBar').style.width = `${damagedPercent}%`;

&nbsp;       }



&nbsp;       function updateValueStats() {

&nbsp;           const categoryValue = {};

&nbsp;           tools.forEach(tool => {

&nbsp;               const preco = parseFloat(tool.preco) || 0;

&nbsp;               const quantidade = parseInt(tool.quantidade) || 1;

&nbsp;               const valor = preco \* quantidade;

&nbsp;               

&nbsp;               if (!categoryValue\[tool.category]) {

&nbsp;                   categoryValue\[tool.category] = 0;

&nbsp;               }

&nbsp;               categoryValue\[tool.category] += valor;

&nbsp;           });

&nbsp;           

&nbsp;           const totalValue = Object.values(categoryValue).reduce((a, b) => a + b, 0);

&nbsp;           let valueHTML = '';

&nbsp;           

&nbsp;           for (const \[category, value] of Object.entries(categoryValue)) {

&nbsp;               const percent = totalValue > 0 ? Math.round((value / totalValue) \* 100) : 0;

&nbsp;               valueHTML += `

&nbsp;                   <div class="progress-container">

&nbsp;                       <div class="progress-label">

&nbsp;                           <span>${category}</span>

&nbsp;                           <span>${formatCurrency(value)}</span>

&nbsp;                       </div>

&nbsp;                       <div class="progress-bar">

&nbsp;                           <div class="progress-fill" style="width: ${percent}%; background-color: ${getRandomColor()}"></div>

&nbsp;                       </div>

&nbsp;                   </div>

&nbsp;               `;

&nbsp;           }

&nbsp;           

&nbsp;           document.getElementById('valueStats').innerHTML = valueHTML || '<p style="text-align: center; color: var(--gray-color); padding: 20px 0;">Nenhum valor cadastrado</p>';

&nbsp;       }



&nbsp;       function updateLowStockItems() {

&nbsp;           const lowStockItems = tools.filter(tool => {

&nbsp;               const quantidade = parseInt(tool.quantidade) || 0;

&nbsp;               const estoqueMinimo = parseInt(tool.estoqueMinimo) || 0;

&nbsp;               return estoqueMinimo > 0 \&\& quantidade <= estoqueMinimo;

&nbsp;           }).slice(0, 5);

&nbsp;           

&nbsp;           if (lowStockItems.length > 0) {

&nbsp;               let lowStockHTML = '';

&nbsp;               lowStockItems.forEach(item => {

&nbsp;                   lowStockHTML += `

&nbsp;                       <div style="display: flex; justify-content: space-between; align-items: center; padding: 10px 0; border-bottom: 1px solid rgba(0,0,0,0.1);">

&nbsp;                           <div>

&nbsp;                               <p style="font-weight: 500; margin-bottom: 2px;">${item.name}</p>

&nbsp;                               <p style="font-size: 12px; color: var(--gray-color);">${item.code} | Estoque: ${item.quantidade} | Mínimo: ${item.estoqueMinimo}</p>

&nbsp;                           </div>

&nbsp;                           <span class="status-badge status-delayed">Baixo</span>

&nbsp;                       </div>

&nbsp;                   `;

&nbsp;               });

&nbsp;               document.getElementById('lowStockItems').innerHTML = lowStockHTML;

&nbsp;           } else {

&nbsp;               document.getElementById('lowStockItems').innerHTML = '<p style="text-align: center; color: var(--gray-color); padding: 20px 0;">Nenhum item com estoque baixo</p>';

&nbsp;           }

&nbsp;       }



&nbsp;       function updateLocationChart() {

&nbsp;           const ctx = document.getElementById('locationChart').getContext('2d');

&nbsp;           

&nbsp;           const locations = {};

&nbsp;           tools.forEach(tool => {

&nbsp;               locations\[tool.location] = (locations\[tool.location] || 0) + 1;

&nbsp;           });

&nbsp;           

&nbsp;           const locationLabels = Object.keys(locations);

&nbsp;           const locationData = Object.values(locations);

&nbsp;           

&nbsp;           if (chartInstance) {

&nbsp;               chartInstance.destroy();

&nbsp;           }

&nbsp;           

&nbsp;           if (locationLabels.length > 0) {

&nbsp;               chartInstance = new Chart(ctx, {

&nbsp;                   type: 'bar',

&nbsp;                   data: {

&nbsp;                       labels: locationLabels,

&nbsp;                       datasets: \[{

&nbsp;                           label: 'Itens',

&nbsp;                           data: locationData,

&nbsp;                           backgroundColor: locationLabels.map(() => getRandomColor()),

&nbsp;                           borderColor: 'rgba(255, 255, 255, 0.8)',

&nbsp;                           borderWidth: 1

&nbsp;                       }]

&nbsp;                   },

&nbsp;                   options: {

&nbsp;                       responsive: true,

&nbsp;                       maintainAspectRatio: false,

&nbsp;                       plugins: {

&nbsp;                           legend: { display: false },

&nbsp;                           tooltip: {

&nbsp;                               callbacks: {

&nbsp;                                   label: function(context) {

&nbsp;                                       return `${context.label}: ${context.raw} itens`;

&nbsp;                                   }

&nbsp;                               }

&nbsp;                           }

&nbsp;                       },

&nbsp;                       scales: {

&nbsp;                           y: { beginAtZero: true, ticks: { stepSize: 1 } }

&nbsp;                       }

&nbsp;                   }

&nbsp;               });

&nbsp;           }

&nbsp;       }



&nbsp;       // ============================================

&nbsp;       // FUNÇÕES DE FORMULÁRIO (MANTIDAS)

&nbsp;       // ============================================



&nbsp;       // Validar formulário

&nbsp;       function validateForm() {

&nbsp;           let isValid = true;

&nbsp;           

&nbsp;           const toolName = document.getElementById('toolName').value.trim();

&nbsp;           const toolCode = document.getElementById('toolCode').value.trim();

&nbsp;           const ncmCode = document.getElementById('ncmCode').value.trim();

&nbsp;           const toolCategory = document.getElementById('toolCategory').value;

&nbsp;           const toolStatus = document.getElementById('toolStatus').value;

&nbsp;           const toolLocation = document.getElementById('toolLocation').value;

&nbsp;           const toolCondition = document.getElementById('toolCondition').value;

&nbsp;           

&nbsp;           // Limpar erros

&nbsp;           document.querySelectorAll('.error').forEach(el => el.classList.remove('error'));

&nbsp;           document.querySelectorAll('.error-message').forEach(el => el.style.display = 'none');

&nbsp;           

&nbsp;           // Validar campos obrigatórios

&nbsp;           if (!toolName) {

&nbsp;               document.getElementById('toolName').classList.add('error');

&nbsp;               document.getElementById('toolNameError').style.display = 'block';

&nbsp;               isValid = false;

&nbsp;           }

&nbsp;           

&nbsp;           if (!toolCode) {

&nbsp;               document.getElementById('toolCode').classList.add('error');

&nbsp;               document.getElementById('toolCodeError').textContent = 'O código é obrigatório';

&nbsp;               document.getElementById('toolCodeError').style.display = 'block';

&nbsp;               isValid = false;

&nbsp;           } else if (isEditing) {

&nbsp;               if (tools.some(tool => tool.code === toolCode \&\& tool.id !== editingToolId)) {

&nbsp;                   document.getElementById('toolCode').classList.add('error');

&nbsp;                   document.getElementById('toolCodeError').textContent = 'Já existe um item com este código';

&nbsp;                   document.getElementById('toolCodeError').style.display = 'block';

&nbsp;                   isValid = false;

&nbsp;               }

&nbsp;           } else {

&nbsp;               if (tools.some(tool => tool.code === toolCode)) {

&nbsp;                   document.getElementById('toolCode').classList.add('error');

&nbsp;                   document.getElementById('toolCodeError').textContent = 'Já existe um item com este código';

&nbsp;                   document.getElementById('toolCodeError').style.display = 'block';

&nbsp;                   isValid = false;

&nbsp;               }

&nbsp;           }

&nbsp;           

&nbsp;           if (!toolCategory) {

&nbsp;               document.getElementById('toolCategory').classList.add('error');

&nbsp;               document.getElementById('toolCategoryError').style.display = 'block';

&nbsp;               isValid = false;

&nbsp;           }

&nbsp;           

&nbsp;           if (!toolStatus) {

&nbsp;               document.getElementById('toolStatus').classList.add('error');

&nbsp;               document.getElementById('toolStatusError').style.display = 'block';

&nbsp;               isValid = false;

&nbsp;           }

&nbsp;           

&nbsp;           if (!toolLocation) {

&nbsp;               document.getElementById('toolLocation').classList.add('error');

&nbsp;               document.getElementById('toolLocationError').style.display = 'block';

&nbsp;               isValid = false;

&nbsp;           }

&nbsp;           

&nbsp;           if (!toolCondition) {

&nbsp;               document.getElementById('toolCondition').classList.add('error');

&nbsp;               document.getElementById('toolConditionError').style.display = 'block';

&nbsp;               isValid = false;

&nbsp;           }

&nbsp;           

&nbsp;           return isValid;

&nbsp;       }



&nbsp;       // Salvar item

&nbsp;       async function saveTool() {

&nbsp;           if (!validateForm()) {

&nbsp;               showNotification('Preencha todos os campos obrigatórios!', 'error');

&nbsp;               return false;

&nbsp;           }

&nbsp;           

&nbsp;           // Verificar permissão

&nbsp;           if (currentUser.role === 'user') {

&nbsp;               showNotification('Usuário não tem permissão para salvar itens.', 'error');

&nbsp;               return false;

&nbsp;           }

&nbsp;           

&nbsp;           try {

&nbsp;               const toolData = getFormData();

&nbsp;               

&nbsp;               if (isEditing \&\& editingToolId) {

&nbsp;                   await updateTool(editingToolId, toolData);

&nbsp;               } else {

&nbsp;                   await createTool(toolData);

&nbsp;               }

&nbsp;               

&nbsp;               return true;

&nbsp;           } catch (error) {

&nbsp;               console.error('Erro ao salvar item:', error);

&nbsp;               showNotification('Erro ao salvar item.', 'error');

&nbsp;               return false;

&nbsp;           }

&nbsp;       }



&nbsp;       function getFormData() {

&nbsp;           return {

&nbsp;               name: document.getElementById('toolName').value.trim(),

&nbsp;               code: document.getElementById('toolCode').value.trim(),

&nbsp;               patrimonio: document.getElementById('patrimonioNumber').value.trim(),

&nbsp;               ncm: document.getElementById('ncmCode').value.trim(),

&nbsp;               category: document.getElementById('toolCategory').value,

&nbsp;               status: document.getElementById('toolStatus').value,

&nbsp;               location: document.getElementById('toolLocation').value,

&nbsp;               condition: document.getElementById('toolCondition').value,

&nbsp;               notaFiscal: document.getElementById('notaFiscal').value.trim(),

&nbsp;               unidade: document.getElementById('unidadeMedida').value,

&nbsp;               preco: parseFloat(document.getElementById('preco').value) || 0,

&nbsp;               quantidade: parseInt(document.getElementById('quantidadeAtual').value) || 1,

&nbsp;               estoqueMinimo: parseInt(document.getElementById('estoqueMinimo').value) || 0,

&nbsp;               estoqueMaximo: parseInt(document.getElementById('estoqueMaximo').value) || 0,

&nbsp;               dataCadastro: document.getElementById('dataCadastro').value,

&nbsp;               description: document.getElementById('toolDescription').value.trim(),

&nbsp;               observations: document.getElementById('toolObservations').value.trim(),

&nbsp;               image: currentToolImage

&nbsp;           };

&nbsp;       }



&nbsp;       async function createTool(toolData) {

&nbsp;           const newTool = {

&nbsp;               id: Date.now(),

&nbsp;               ...toolData,

&nbsp;               createdAt: new Date().toISOString(),

&nbsp;               updatedAt: new Date().toISOString()

&nbsp;           };

&nbsp;           

&nbsp;           tools.push(newTool);

&nbsp;           

&nbsp;           await saveTools();

&nbsp;           

&nbsp;           if (isOnlineMode \&\& supabaseClient) {

&nbsp;               await saveToolToSupabase(newTool);

&nbsp;           }

&nbsp;           

&nbsp;           updateInterface();

&nbsp;           showNotification('Item cadastrado com sucesso!', 'success');

&nbsp;           clearForm();

&nbsp;       }



&nbsp;       async function updateTool(toolId, toolData) {

&nbsp;           const toolIndex = tools.findIndex(t => t.id === toolId);

&nbsp;           

&nbsp;           if (toolIndex === -1) {

&nbsp;               showNotification('Item não encontrado!', 'error');

&nbsp;               return false;

&nbsp;           }

&nbsp;           

&nbsp;           const updatedTool = {

&nbsp;               ...tools\[toolIndex],

&nbsp;               ...toolData,

&nbsp;               updatedAt: new Date().toISOString()

&nbsp;           };

&nbsp;           

&nbsp;           tools\[toolIndex] = updatedTool;

&nbsp;           

&nbsp;           await saveTools();

&nbsp;           

&nbsp;           if (isOnlineMode \&\& supabaseClient) {

&nbsp;               await saveToolToSupabase(updatedTool);

&nbsp;           }

&nbsp;           

&nbsp;           updateInterface();

&nbsp;           showNotification('Item atualizado com sucesso!', 'success');

&nbsp;           clearForm();

&nbsp;           

&nbsp;           return true;

&nbsp;       }



&nbsp;       // Converter para formato Supabase

&nbsp;       function convertToSupabaseFormat(tool) {

&nbsp;           return {

&nbsp;               name: tool.name,

&nbsp;               code: tool.code,

&nbsp;               patrimonio: tool.patrimonio || null,

&nbsp;               ncm: tool.ncm,

&nbsp;               category: tool.category,

&nbsp;               status: tool.status,

&nbsp;               location: tool.location,

&nbsp;               condition: tool.condition,

&nbsp;               nota\_fiscal: tool.notaFiscal || null,

&nbsp;               unidade: tool.unidade || 'UN',

&nbsp;               preco: tool.preco || 0,

&nbsp;               quantidade: tool.quantidade || 1,

&nbsp;               estoque\_minimo: tool.estoqueMinimo || 0,

&nbsp;               estoque\_maximo: tool.estoqueMaximo || 0,

&nbsp;               description: tool.description || null,

&nbsp;               observations: tool.observations || null,

&nbsp;               image\_url: tool.image || null,

&nbsp;               data\_cadastro: tool.dataCadastro || new Date().toISOString().split('T')\[0],

&nbsp;               updated\_at: new Date().toISOString()

&nbsp;           };

&nbsp;       }



&nbsp;       // Salvar no Supabase

&nbsp;       async function saveToolToSupabase(tool) {

&nbsp;           try {

&nbsp;               const toolData = convertToSupabaseFormat(tool);

&nbsp;               

&nbsp;               // Verificar se já existe

&nbsp;               const { data: existing } = await supabaseClient

&nbsp;                   .from('tools')

&nbsp;                   .select('id')

&nbsp;                   .eq('code', tool.code)

&nbsp;                   .maybeSingle();

&nbsp;               

&nbsp;               if (existing) {

&nbsp;                   // Atualizar

&nbsp;                   const { error } = await supabaseClient

&nbsp;                       .from('tools')

&nbsp;                       .update(toolData)

&nbsp;                       .eq('code', tool.code);

&nbsp;                   

&nbsp;                   if (error) throw error;

&nbsp;               } else {

&nbsp;                   // Inserir

&nbsp;                   toolData.created\_at = tool.createdAt || new Date().toISOString();

&nbsp;                   

&nbsp;                   const { error } = await supabaseClient

&nbsp;                       .from('tools')

&nbsp;                       .insert(\[toolData]);

&nbsp;                   

&nbsp;                   if (error) throw error;

&nbsp;               }

&nbsp;               

&nbsp;               return true;

&nbsp;           } catch (error) {

&nbsp;               console.error('Erro ao salvar no Supabase:', error);

&nbsp;               showNotification('Erro ao salvar na nuvem.', 'warning');

&nbsp;               return false;

&nbsp;           }

&nbsp;       }



&nbsp;       // ============================================

&nbsp;       // FUNÇÕES DE LISTAGEM (MANTIDAS)

&nbsp;       // ============================================



&nbsp;       // Carregar lista de itens

&nbsp;       function loadToolsList(filter = 'all') {

&nbsp;           const tbody = document.getElementById('toolsTableBody');

&nbsp;           const noToolsRow = document.getElementById('noToolsRow');

&nbsp;           

&nbsp;           tbody.innerHTML = '';

&nbsp;           tbody.appendChild(noToolsRow);

&nbsp;           

&nbsp;           let filteredTools = tools;

&nbsp;           

&nbsp;           if (filter === 'available') {

&nbsp;               filteredTools = tools.filter(tool => tool.status === 'Disponível');

&nbsp;           } else if (filter === 'inuse') {

&nbsp;               filteredTools = tools.filter(tool => tool.status === 'Em Uso');

&nbsp;           } else if (filter === 'maintenance') {

&nbsp;               filteredTools = tools.filter(tool => tool.status === 'Manutenção');

&nbsp;           } else if (filter === 'lowstock') {

&nbsp;               filteredTools = tools.filter(tool => {

&nbsp;                   const quantidade = parseInt(tool.quantidade) || 0;

&nbsp;                   const estoqueMinimo = parseInt(tool.estoqueMinimo) || 0;

&nbsp;                   return estoqueMinimo > 0 \&\& quantidade <= estoqueMinimo;

&nbsp;               });

&nbsp;           }

&nbsp;           

&nbsp;           const searchTerm = document.getElementById('searchTool')?.value.toLowerCase();

&nbsp;           if (searchTerm) {

&nbsp;               filteredTools = filteredTools.filter(tool => 

&nbsp;                   tool.name.toLowerCase().includes(searchTerm) ||

&nbsp;                   tool.code.toLowerCase().includes(searchTerm) ||

&nbsp;                   (tool.patrimonio \&\& tool.patrimonio.toLowerCase().includes(searchTerm)) ||

&nbsp;                   tool.category.toLowerCase().includes(searchTerm)

&nbsp;               );

&nbsp;           }

&nbsp;           

&nbsp;           if (filteredTools.length === 0) {

&nbsp;               noToolsRow.style.display = 'table-row';

&nbsp;               noToolsRow.innerHTML = `<td colspan="13" style="text-align: center; padding: 40px; color: var(--gray-color);">

&nbsp;                   Nenhum item encontrado${searchTerm ? ' para "' + searchTerm + '"' : ''}

&nbsp;               </td>`;

&nbsp;               return;

&nbsp;           }

&nbsp;           

&nbsp;           noToolsRow.style.display = 'none';

&nbsp;           

&nbsp;           filteredTools.forEach(tool => {

&nbsp;               const row = document.createElement('tr');

&nbsp;               row.innerHTML = createTableRow(tool);

&nbsp;               tbody.appendChild(row);

&nbsp;           });

&nbsp;           

&nbsp;           addRowEventListeners();

&nbsp;       }



&nbsp;       function createTableRow(tool) {

&nbsp;           const statusClass = getStatusClass(tool.status);

&nbsp;           const stockInfo = getStockInfo(tool);

&nbsp;           

&nbsp;           // Verificar permissões para ações

&nbsp;           const canEdit = currentUser.role !== 'user';

&nbsp;           

&nbsp;           return `

&nbsp;               <td style="text-align: center;">

&nbsp;                   <button class="action-btn action-btn-view" data-id="${tool.id}" title="Gerar QR Code" style="font-size: 20px;">

&nbsp;                       <i class="fas fa-qrcode"></i>

&nbsp;                   </button>

&nbsp;               </td>

&nbsp;               <td><strong>${tool.code}</strong></td>

&nbsp;               <td>${tool.name}</td>

&nbsp;               <td>${tool.patrimonio || '-'}</td>

&nbsp;               <td>${tool.category}</td>

&nbsp;               <td><span class="status-badge ${statusClass}">${tool.status}</span></td>

&nbsp;               <td>${tool.location}</td>

&nbsp;               <td>${tool.condition}</td>

&nbsp;               <td>${tool.unidade || 'UN'}</td>

&nbsp;               <td class="${stockInfo.class}">${stockInfo.text}</td>

&nbsp;               <td>${tool.preco ? formatCurrency(tool.preco) : '-'}</td>

&nbsp;               <td>${formatDate(tool.dataCadastro)}</td>

&nbsp;               <td>

&nbsp;                   <div class="action-buttons">

&nbsp;                       <button class="action-btn action-btn-view" data-id="${tool.id}" title="Visualizar">

&nbsp;                           <i class="fas fa-eye"></i>

&nbsp;                       </button>

&nbsp;                       ${canEdit ? `

&nbsp;                           <button class="action-btn action-btn-edit" data-id="${tool.id}" title="Editar">

&nbsp;                               <i class="fas fa-edit"></i>

&nbsp;                           </button>

&nbsp;                           <button class="action-btn action-btn-delete" data-id="${tool.id}" title="Excluir">

&nbsp;                               <i class="fas fa-trash"></i>

&nbsp;                           </button>

&nbsp;                       ` : ''}

&nbsp;                   </div>

&nbsp;               </td>

&nbsp;           `;

&nbsp;       }



&nbsp;       function getStatusClass(status) {

&nbsp;           switch(status) {

&nbsp;               case 'Disponível': return 'status-completed';

&nbsp;               case 'Em Uso': return 'status-ontrack';

&nbsp;               case 'Manutenção': return 'status-delayed';

&nbsp;               case 'Danificado': return 'status-delayed';

&nbsp;               default: return 'status-ontrack';

&nbsp;           }

&nbsp;       }



&nbsp;       function getStockInfo(tool) {

&nbsp;           const quantidade = parseInt(tool.quantidade) || 0;

&nbsp;           const estoqueMinimo = parseInt(tool.estoqueMinimo) || 0;

&nbsp;           

&nbsp;           if (estoqueMinimo > 0 \&\& quantidade <= estoqueMinimo) {

&nbsp;               return { class: 'stock-low', text: `${quantidade} ⚠️` };

&nbsp;           } else if (tool.estoqueMaximo \&\& quantidade >= tool.estoqueMaximo) {

&nbsp;               return { class: 'stock-high', text: quantidade };

&nbsp;           } else {

&nbsp;               return { class: 'stock-normal', text: quantidade };

&nbsp;           }

&nbsp;       }



&nbsp;       function addRowEventListeners() {

&nbsp;           document.querySelectorAll('.action-btn-view').forEach(btn => {

&nbsp;               if (btn.title === 'Gerar QR Code') {

&nbsp;                   btn.addEventListener('click', function() {

&nbsp;                       const toolId = parseInt(this.getAttribute('data-id'));

&nbsp;                       generateQRCodeForTool(toolId);

&nbsp;                   });

&nbsp;               } else {

&nbsp;                   btn.addEventListener('click', function() {

&nbsp;                       const toolId = parseInt(this.getAttribute('data-id'));

&nbsp;                       viewToolDetails(toolId);

&nbsp;                   });

&nbsp;               }

&nbsp;           });

&nbsp;           

&nbsp;           document.querySelectorAll('.action-btn-edit').forEach(btn => {

&nbsp;               btn.addEventListener('click', function() {

&nbsp;                   const toolId = parseInt(this.getAttribute('data-id'));

&nbsp;                   editTool(toolId);

&nbsp;               });

&nbsp;           });

&nbsp;           

&nbsp;           document.querySelectorAll('.action-btn-delete').forEach(btn => {

&nbsp;               btn.addEventListener('click', function() {

&nbsp;                   const toolId = parseInt(this.getAttribute('data-id'));

&nbsp;                   deleteTool(toolId);

&nbsp;               });

&nbsp;           });

&nbsp;       }



&nbsp;       // ============================================

&nbsp;       // FUNÇÕES AUXILIARES (MANTIDAS)

&nbsp;       // ============================================



&nbsp;       // Dados de exemplo

&nbsp;       function getExampleTools() {

&nbsp;           return \[

&nbsp;               {

&nbsp;                   id: 1,

&nbsp;                   name: "Martelo de Borracha 500g",

&nbsp;                   code: "MART-001",

&nbsp;                   patrimonio: "PAT-2023-001",

&nbsp;                   ncm: "8205.70.00",

&nbsp;                   category: "Ferramentas Manuais",

&nbsp;                   status: "Disponível",

&nbsp;                   location: "Almoxarifado Central",

&nbsp;                   condition: "Bom",

&nbsp;                   notaFiscal: "NF-2023-001234",

&nbsp;                   unidade: "UN",

&nbsp;                   preco: 25.90,

&nbsp;                   quantidade: 5,

&nbsp;                   estoqueMinimo: 2,

&nbsp;                   estoqueMaximo: 10,

&nbsp;                   dataCadastro: "2023-10-15",

&nbsp;                   description: "Martelo de borracha para serviços de acabamento",

&nbsp;                   observations: "Usar apenas para superfícies delicadas",

&nbsp;                   image: "",

&nbsp;                   createdAt: "2023-10-15T09:30:00Z",

&nbsp;                   updatedAt: "2023-10-15T09:30:00Z"

&nbsp;               },

&nbsp;               {

&nbsp;                   id: 2,

&nbsp;                   name: "Furadeira de Impacto 750W",

&nbsp;                   code: "FUR-012",

&nbsp;                   patrimonio: "PAT-2023-002",

&nbsp;                   ncm: "8467.21.00",

&nbsp;                   category: "Ferramentas Elétricas",

&nbsp;                   status: "Em Uso",

&nbsp;                   location: "Oficina Mecânica",

&nbsp;                   condition: "Regular",

&nbsp;                   notaFiscal: "NF-2023-001235",

&nbsp;                   unidade: "UN",

&nbsp;                   preco: 450.00,

&nbsp;                   quantidade: 1,

&nbsp;                   estoqueMinimo: 0,

&nbsp;                   estoqueMaximo: 2,

&nbsp;                   dataCadastro: "2023-10-10",

&nbsp;                   description: "Furadeira de impacto 750W com maleta e acessórios",

&nbsp;                   observations: "Necessita revisão das escovas",

&nbsp;                   image: "",

&nbsp;                   createdAt: "2023-10-10T14:20:00Z",

&nbsp;                   updatedAt: "2023-10-20T11:15:00Z"

&nbsp;               },

&nbsp;               {

&nbsp;                   id: 3,

&nbsp;                   name: "Capacete de Segurança",

&nbsp;                   code: "EPI-005",

&nbsp;                   patrimonio: "PAT-2023-003",

&nbsp;                   ncm: "6506.10.00",

&nbsp;                   category: "EPI",

&nbsp;                   status: "Disponível",

&nbsp;                   location: "Almoxarifado Central",

&nbsp;                   condition: "Novo",

&nbsp;                   notaFiscal: "NF-2023-001236",

&nbsp;                   unidade: "UN",

&nbsp;                   preco: 35.50,

&nbsp;                   quantidade: 12,

&nbsp;                   estoqueMinimo: 5,

&nbsp;                   estoqueMaximo: 20,

&nbsp;                   dataCadastro: "2023-09-28",

&nbsp;                   description: "Capacete de segurança com jugular, cor amarela",

&nbsp;                   observations: "Lote 2023/09",

&nbsp;                   image: "",

&nbsp;                   createdAt: "2023-09-28T16:45:00Z",

&nbsp;                   updatedAt: "2023-10-18T10:30:00Z"

&nbsp;               }

&nbsp;           ];

&nbsp;       }



&nbsp;       // Formatar data

&nbsp;       function formatDate(dateString) {

&nbsp;           if (!dateString) return '-';

&nbsp;           try {

&nbsp;               return new Date(dateString).toLocaleDateString('pt-BR');

&nbsp;           } catch (e) {

&nbsp;               return dateString;

&nbsp;           }

&nbsp;       }



&nbsp;       // Formatar moeda

&nbsp;       function formatCurrency(value) {

&nbsp;           if (!value \&\& value !== 0) return 'R$ 0,00';

&nbsp;           return `R$ ${parseFloat(value).toFixed(2).replace('.', ',')}`;

&nbsp;       }



&nbsp;       // Gerar cor aleatória

&nbsp;       function getRandomColor() {

&nbsp;           const colors = \[

&nbsp;               '#3498db', '#2ecc71', '#e74c3c', '#f39c12', '#9b59b6',

&nbsp;               '#1abc9c', '#d35400', '#c0392b', '#16a085', '#8e44ad'

&nbsp;           ];

&nbsp;           return colors\[Math.floor(Math.random() \* colors.length)];

&nbsp;       }



&nbsp;       // Mostrar notificação

&nbsp;       function showNotification(message, type) {

&nbsp;           const existing = document.querySelectorAll('.notification');

&nbsp;           existing.forEach(n => n.remove());

&nbsp;           

&nbsp;           const notification = document.createElement('div');

&nbsp;           notification.className = `notification notification-${type}`;

&nbsp;           notification.innerHTML = `

&nbsp;               <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'warning' ? 'exclamation-triangle' : 'exclamation-circle'}"></i>

&nbsp;               <span>${message}</span>

&nbsp;           `;

&nbsp;           

&nbsp;           document.body.appendChild(notification);

&nbsp;           

&nbsp;           setTimeout(() => {

&nbsp;               if (notification.parentNode) {

&nbsp;                   notification.parentNode.removeChild(notification);

&nbsp;               }

&nbsp;           }, 5000);

&nbsp;       }



&nbsp;       // Limpar formulário

&nbsp;       function clearForm() {

&nbsp;           document.getElementById('toolForm').reset();

&nbsp;           document.getElementById('dataCadastro').value = new Date().toISOString().split('T')\[0];

&nbsp;           document.getElementById('cameraPlaceholder').style.display = 'block';

&nbsp;           document.getElementById('toolImagePreview').style.display = 'none';

&nbsp;           document.getElementById('toolImagePreview').src = '';

&nbsp;           currentToolImage = null;

&nbsp;           

&nbsp;           document.querySelectorAll('.error').forEach(el => el.classList.remove('error'));

&nbsp;           document.querySelectorAll('.error-message').forEach(el => el.style.display = 'none');

&nbsp;           

&nbsp;           isEditing = false;

&nbsp;           editingToolId = null;

&nbsp;           

&nbsp;           const saveBtn = document.getElementById('saveToolBtn');

&nbsp;           saveBtn.innerHTML = '<i class="fas fa-save"></i> Salvar Item';

&nbsp;       }



&nbsp;       // Atualizar interface completa

&nbsp;       function updateInterface() {

&nbsp;           updateHeaderStats();

&nbsp;           updateStatistics();

&nbsp;           loadToolsList();

&nbsp;           updateStorageInfo();

&nbsp;       }



&nbsp;       // ============================================

&nbsp;       // FUNÇÕES DE SINCRONIZAÇÃO (MANTIDAS)

&nbsp;       // ============================================



&nbsp;       // Buscar dados do Supabase

&nbsp;       async function fetchFromSupabase() {

&nbsp;           try {

&nbsp;               const limit = parseInt(document.getElementById('syncLimit').value) || 100;

&nbsp;               

&nbsp;               const { data, error } = await supabaseClient

&nbsp;                   .from('tools')

&nbsp;                   .select('\*')

&nbsp;                   .order('updated\_at', { ascending: false })

&nbsp;                   .limit(limit);

&nbsp;               

&nbsp;               if (error) throw error;

&nbsp;               

&nbsp;               if (data \&\& data.length > 0) {

&nbsp;                   const convertedTools = data.map(item => ({

&nbsp;                       id: item.id || Date.now(),

&nbsp;                       name: item.name,

&nbsp;                       code: item.code,

&nbsp;                       patrimonio: item.patrimonio,

&nbsp;                       ncm: item.ncm,

&nbsp;                       category: item.category,

&nbsp;                       status: item.status,

&nbsp;                       location: item.location,

&nbsp;                       condition: item.condition,

&nbsp;                       notaFiscal: item.nota\_fiscal,

&nbsp;                       unidade: item.unidade,

&nbsp;                       preco: item.preco,

&nbsp;                       quantidade: item.quantidade,

&nbsp;                       estoqueMinimo: item.estoque\_minimo,

&nbsp;                       estoqueMaximo: item.estoque\_maximo,

&nbsp;                       description: item.description,

&nbsp;                       observations: item.observations,

&nbsp;                       image: item.image\_url,

&nbsp;                       dataCadastro: item.data\_cadastro,

&nbsp;                       createdAt: item.created\_at,

&nbsp;                       updatedAt: item.updated\_at

&nbsp;                   }));

&nbsp;                   

&nbsp;                   tools = convertedTools;

&nbsp;                   await saveTools();

&nbsp;                   updateInterface();

&nbsp;                   

&nbsp;                   showNotification(`${convertedTools.length} itens carregados da nuvem!`, 'success');

&nbsp;                   return true;

&nbsp;               } else {

&nbsp;                   showNotification('Nenhum dado encontrado na nuvem.', 'info');

&nbsp;                   return false;

&nbsp;               }

&nbsp;           } catch (error) {

&nbsp;               console.error('Erro ao buscar do Supabase:', error);

&nbsp;               showNotification(`Erro ao buscar dados: ${error.message}`, 'error');

&nbsp;               return false;

&nbsp;           }

&nbsp;       }



&nbsp;       // Enviar dados para Supabase

&nbsp;       async function syncToSupabase() {

&nbsp;           try {

&nbsp;               let successCount = 0;

&nbsp;               let errorCount = 0;

&nbsp;               

&nbsp;               for (const tool of tools) {

&nbsp;                   try {

&nbsp;                       const result = await saveToolToSupabase(tool);

&nbsp;                       if (result) successCount++;

&nbsp;                       else errorCount++;

&nbsp;                   } catch (error) {

&nbsp;                       errorCount++;

&nbsp;                       console.error(`Erro ao sincronizar ${tool.code}:`, error);

&nbsp;                   }

&nbsp;               }

&nbsp;               

&nbsp;               if (errorCount === 0) {

&nbsp;                   showNotification(`${successCount} itens sincronizados com sucesso!`, 'success');

&nbsp;               } else {

&nbsp;                   showNotification(`${successCount} sucessos, ${errorCount} erros na sincronização.`, 'warning');

&nbsp;               }

&nbsp;               

&nbsp;               return true;

&nbsp;           } catch (error) {

&nbsp;               console.error('Erro na sincronização:', error);

&nbsp;               showNotification('Erro na sincronização.', 'error');

&nbsp;               return false;

&nbsp;           }

&nbsp;       }



&nbsp;       // Atualizar informações do banco

&nbsp;       async function updateDatabaseInfo() {

&nbsp;           if (!supabaseClient) return;

&nbsp;           

&nbsp;           try {

&nbsp;               const { count } = await supabaseClient

&nbsp;                   .from('tools')

&nbsp;                   .select('\*', { count: 'exact', head: true });

&nbsp;               

&nbsp;               const dbInfoElement = document.getElementById('dbInfo');

&nbsp;               if (dbInfoElement) {

&nbsp;                   dbInfoElement.innerHTML = `

&nbsp;                       <div style="padding: 20px;">

&nbsp;                           <h4 style="margin-bottom: 15px;">Informações do Banco de Dados</h4>

&nbsp;                           <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-bottom: 20px;">

&nbsp;                               <div class="info-item">

&nbsp;                                   <div class="info-label">Status</div>

&nbsp;                                   <div class="info-value"><span class="status-badge status-completed">Conectado</span></div>

&nbsp;                               </div>

&nbsp;                               <div class="info-item">

&nbsp;                                   <div class="info-label">Itens Online</div>

&nbsp;                                   <div class="info-value">${count || 0}</div>

&nbsp;                               </div>

&nbsp;                           </div>

&nbsp;                           <p style="text-align: center; color: var(--gray-color);">

&nbsp;                               Dados locais: ${tools.length} itens

&nbsp;                           </p>

&nbsp;                       </div>

&nbsp;                   `;

&nbsp;               }

&nbsp;           } catch (error) {

&nbsp;               console.error('Erro ao atualizar info do banco:', error);

&nbsp;           }

&nbsp;       }



&nbsp;       // ============================================

&nbsp;       // FUNÇÕES DE VISUALIZAÇÃO E EDIÇÃO (MANTIDAS)

&nbsp;       // ============================================



&nbsp;       // Visualizar detalhes

&nbsp;       function viewToolDetails(toolId) {

&nbsp;           const tool = tools.find(t => t.id === toolId);

&nbsp;           if (!tool) return;

&nbsp;           

&nbsp;           const modalBody = document.getElementById('toolModalBody');

&nbsp;           modalBody.innerHTML = createToolDetailsHTML(tool);

&nbsp;           

&nbsp;           document.getElementById('toolModal').style.display = 'flex';

&nbsp;       }



&nbsp;       function createToolDetailsHTML(tool) {

&nbsp;           return `

&nbsp;               <div style="display: grid; grid-template-columns: 1fr 2fr; gap: 30px;">

&nbsp;                   <div>

&nbsp;                       ${tool.image ? 

&nbsp;                           `<img src="${tool.image}" alt="${tool.name}" style="width: 100%; border-radius: 8px;">` :

&nbsp;                           '<div style="background-color: #f5f5f5; height: 200px; display: flex; align-items: center; justify-content: center; border-radius: 8px;"><i class="fas fa-box" style="font-size: 60px; color: #ccc;"></i></div>'

&nbsp;                       }

&nbsp;                       <div style="text-align: center; margin-top: 20px;">

&nbsp;                           <button class="btn btn-primary" onclick="generateQRCodeForTool(${tool.id})">

&nbsp;                               <i class="fas fa-qrcode"></i> Gerar QR Code

&nbsp;                           </button>

&nbsp;                       </div>

&nbsp;                   </div>

&nbsp;                   <div>

&nbsp;                       <h3 style="margin-bottom: 10px; color: var(--primary-color);">${tool.name}</h3>

&nbsp;                       <p style="color: var(--gray-color); margin-bottom: 20px;">Código: ${tool.code} | Patrimônio: ${tool.patrimonio || 'Não informado'}</p>

&nbsp;                       

&nbsp;                       <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px; margin-bottom: 20px;">

&nbsp;                           <div><strong>N.C.M.:</strong> ${tool.ncm || '-'}</div>

&nbsp;                           <div><strong>Categoria:</strong> ${tool.category}</div>

&nbsp;                           <div><strong>Status:</strong> <span class="status-badge ${getStatusClass(tool.status)}">${tool.status}</span></div>

&nbsp;                           <div><strong>Localização:</strong> ${tool.location}</div>

&nbsp;                           <div><strong>Condição:</strong> ${tool.condition}</div>

&nbsp;                           <div><strong>Unidade:</strong> ${tool.unidade || 'UN'}</div>

&nbsp;                           <div><strong>Nota Fiscal:</strong> ${tool.notaFiscal || '-'}</div>

&nbsp;                           <div><strong>Preço:</strong> ${formatCurrency(tool.preco)}</div>

&nbsp;                           <div><strong>Quantidade:</strong> ${tool.quantidade || 1}</div>

&nbsp;                           <div><strong>Estoque Mín:</strong> ${tool.estoqueMinimo || 0}</div>

&nbsp;                           <div><strong>Estoque Máx:</strong> ${tool.estoqueMaximo || 0}</div>

&nbsp;                           <div><strong>Data Cadastro:</strong> ${formatDate(tool.dataCadastro)}</div>

&nbsp;                       </div>

&nbsp;                       

&nbsp;                       ${tool.description ? `

&nbsp;                           <div style="margin-bottom: 15px;">

&nbsp;                               <strong>Descrição:</strong>

&nbsp;                               <p>${tool.description}</p>

&nbsp;                           </div>

&nbsp;                       ` : ''}

&nbsp;                       

&nbsp;                       ${tool.observations ? `

&nbsp;                           <div style="margin-bottom: 15px;">

&nbsp;                               <strong>Observações:</strong>

&nbsp;                               <p>${tool.observations}</p>

&nbsp;                           </div>

&nbsp;                       ` : ''}

&nbsp;                   </div>

&nbsp;               </div>

&nbsp;           `;

&nbsp;       }



&nbsp;       // Editar item

&nbsp;       function editTool(toolId) {

&nbsp;           // Verificar permissão

&nbsp;           if (currentUser.role === 'user') {

&nbsp;               showNotification('Usuário não tem permissão para editar itens.', 'error');

&nbsp;               return;

&nbsp;           }

&nbsp;           

&nbsp;           // Mudar para aba de cadastro

&nbsp;           document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));

&nbsp;           document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));

&nbsp;           

&nbsp;           document.querySelector('\[data-tab="cadastro"]').classList.add('active');

&nbsp;           document.getElementById('cadastro').classList.add('active');

&nbsp;           

&nbsp;           const tool = tools.find(t => t.id === toolId);

&nbsp;           if (!tool) return;

&nbsp;           

&nbsp;           // Preencher formulário

&nbsp;           document.getElementById('toolName').value = tool.name;

&nbsp;           document.getElementById('toolCode').value = tool.code;

&nbsp;           document.getElementById('patrimonioNumber').value = tool.patrimonio || '';

&nbsp;           document.getElementById('ncmCode').value = tool.ncm || '';

&nbsp;           document.getElementById('toolCategory').value = tool.category;

&nbsp;           document.getElementById('toolStatus').value = tool.status;

&nbsp;           document.getElementById('toolLocation').value = tool.location;

&nbsp;           document.getElementById('toolCondition').value = tool.condition;

&nbsp;           document.getElementById('notaFiscal').value = tool.notaFiscal || '';

&nbsp;           document.getElementById('unidadeMedida').value = tool.unidade || 'UN';

&nbsp;           document.getElementById('preco').value = tool.preco || '';

&nbsp;           document.getElementById('quantidadeAtual').value = tool.quantidade || 1;

&nbsp;           document.getElementById('estoqueMinimo').value = tool.estoqueMinimo || 0;

&nbsp;           document.getElementById('estoqueMaximo').value = tool.estoqueMaximo || 0;

&nbsp;           document.getElementById('dataCadastro').value = tool.dataCadastro || '';

&nbsp;           document.getElementById('toolDescription').value = tool.description || '';

&nbsp;           document.getElementById('toolObservations').value = tool.observations || '';

&nbsp;           

&nbsp;           if (tool.image) {

&nbsp;               currentToolImage = tool.image;

&nbsp;               document.getElementById('cameraPlaceholder').style.display = 'none';

&nbsp;               document.getElementById('toolImagePreview').style.display = 'block';

&nbsp;               document.getElementById('toolImagePreview').src = tool.image;

&nbsp;           }

&nbsp;           

&nbsp;           isEditing = true;

&nbsp;           editingToolId = toolId;

&nbsp;           

&nbsp;           document.getElementById('saveToolBtn').innerHTML = '<i class="fas fa-save"></i> Atualizar Item';

&nbsp;           

&nbsp;           showNotification('Editando item. Atualize os dados.', 'warning');

&nbsp;       }



&nbsp;       // Excluir item

&nbsp;       async function deleteTool(toolId) {

&nbsp;           // Verificar permissão

&nbsp;           if (currentUser.role === 'user') {

&nbsp;               showNotification('Usuário não tem permissão para excluir itens.', 'error');

&nbsp;               return;

&nbsp;           }

&nbsp;           

&nbsp;           if (!confirm('Tem certeza que deseja excluir este item?')) {

&nbsp;               return;

&nbsp;           }

&nbsp;           

&nbsp;           const tool = tools.find(t => t.id === toolId);

&nbsp;           if (!tool) {

&nbsp;               showNotification('Item não encontrado!', 'error');

&nbsp;               return;

&nbsp;           }

&nbsp;           

&nbsp;           // Remover localmente

&nbsp;           tools = tools.filter(t => t.id !== toolId);

&nbsp;           await saveTools();

&nbsp;           

&nbsp;           // Remover do Supabase

&nbsp;           if (isOnlineMode \&\& supabaseClient) {

&nbsp;               try {

&nbsp;                   await supabaseClient

&nbsp;                       .from('tools')

&nbsp;                       .delete()

&nbsp;                       .eq('code', tool.code);

&nbsp;               } catch (error) {

&nbsp;                   console.error('Erro ao excluir do Supabase:', error);

&nbsp;               }

&nbsp;           }

&nbsp;           

&nbsp;           updateInterface();

&nbsp;           showNotification('Item excluído com sucesso!', 'success');

&nbsp;       }



&nbsp;       // Gerar QR Code

&nbsp;       window.generateQRCodeForTool = function(toolId) {

&nbsp;           const tool = tools.find(t => t.id === toolId);

&nbsp;           if (!tool) return;

&nbsp;           

&nbsp;           const qrContent = JSON.stringify({

&nbsp;               nome: tool.name,

&nbsp;               codigo: tool.code,

&nbsp;               patrimonio: tool.patrimonio,

&nbsp;               ncm: tool.ncm,

&nbsp;               categoria: tool.category,

&nbsp;               status: tool.status,

&nbsp;               localizacao: tool.location,

&nbsp;               condicao: tool.condition,

&nbsp;               data\_cadastro: tool.dataCadastro

&nbsp;           }, null, 2);

&nbsp;           

&nbsp;           const qrModalBody = document.getElementById('qrModalBody');

&nbsp;           qrModalBody.innerHTML = `

&nbsp;               <div class="qrcode-container">

&nbsp;                   <h4 style="margin-bottom: 20px;">QR Code para: ${tool.name}</h4>

&nbsp;                   <div id="qrcodeCanvas" style="margin: 0 auto 20px;"></div>

&nbsp;                   <p style="margin-top: 20px; color: var(--gray-color); font-size: 14px;">

&nbsp;                       Use este QR Code para identificar rapidamente o item.

&nbsp;                   </p>

&nbsp;                   <div class="btn-group" style="margin-top: 20px;">

&nbsp;                       <button class="btn btn-primary" id="downloadQRCodeBtn">

&nbsp;                           <i class="fas fa-download"></i> Baixar QR Code

&nbsp;                       </button>

&nbsp;                       <button class="btn btn-success" id="printQRCodeBtn">

&nbsp;                           <i class="fas fa-print"></i> Imprimir

&nbsp;                       </button>

&nbsp;                   </div>

&nbsp;               </div>

&nbsp;           `;

&nbsp;           

&nbsp;           // Gerar QR Code

&nbsp;           QRCode.toCanvas(document.getElementById('qrcodeCanvas'), qrContent, {

&nbsp;               width: 200,

&nbsp;               margin: 2,

&nbsp;               color: { dark: '#000000', light: '#FFFFFF' }

&nbsp;           });

&nbsp;           

&nbsp;           // Configurar botões

&nbsp;           document.getElementById('downloadQRCodeBtn').onclick = function() {

&nbsp;               const canvas = document.querySelector('#qrcodeCanvas canvas');

&nbsp;               if (canvas) {

&nbsp;                   const link = document.createElement('a');

&nbsp;                   link.download = `QRCode\_${tool.code}.png`;

&nbsp;                   link.href = canvas.toDataURL('image/png');

&nbsp;                   link.click();

&nbsp;               }

&nbsp;           };

&nbsp;           

&nbsp;           document.getElementById('printQRCodeBtn').onclick = function() {

&nbsp;               window.print();

&nbsp;           };

&nbsp;           

&nbsp;           document.getElementById('qrModal').style.display = 'flex';

&nbsp;       };



&nbsp;       // ============================================

&nbsp;       // FUNÇÕES DE BACKUP E EXPORTAÇÃO (MANTIDAS)

&nbsp;       // ============================================



&nbsp;       // Fazer backup

&nbsp;       async function createBackup() {

&nbsp;           // Verificar permissão

&nbsp;           if (currentUser.role === 'user') {

&nbsp;               showNotification('Usuário não tem permissão para fazer backup.', 'error');

&nbsp;               return;

&nbsp;           }

&nbsp;           

&nbsp;           try {

&nbsp;               const backupData = {

&nbsp;                   tools: tools,

&nbsp;                   timestamp: new Date().toISOString(),

&nbsp;                   count: tools.length

&nbsp;               };

&nbsp;               

&nbsp;               const blob = new Blob(\[JSON.stringify(backupData, null, 2)], { 

&nbsp;                   type: 'application/json' 

&nbsp;               });

&nbsp;               

&nbsp;               const url = URL.createObjectURL(blob);

&nbsp;               const a = document.createElement('a');

&nbsp;               a.href = url;

&nbsp;               a.download = `backup\_ferramentas\_${new Date().toISOString().split('T')\[0]}.json`;

&nbsp;               document.body.appendChild(a);

&nbsp;               a.click();

&nbsp;               document.body.removeChild(a);

&nbsp;               URL.revokeObjectURL(url);

&nbsp;               

&nbsp;               showNotification(`Backup criado com ${tools.length} itens!`, 'success');

&nbsp;               

&nbsp;           } catch (error) {

&nbsp;               console.error('Erro ao criar backup:', error);

&nbsp;               showNotification('Erro ao criar backup.', 'error');

&nbsp;           }

&nbsp;       }



&nbsp;       // Restaurar backup

&nbsp;       function handleRestoreBackup(file) {

&nbsp;           // Verificar permissão

&nbsp;           if (currentUser.role === 'user') {

&nbsp;               showNotification('Usuário não tem permissão para restaurar backup.', 'error');

&nbsp;               return;

&nbsp;           }

&nbsp;           

&nbsp;           const reader = new FileReader();

&nbsp;           

&nbsp;           reader.onload = async function(event) {

&nbsp;               try {

&nbsp;                   const backupData = JSON.parse(event.target.result);

&nbsp;                   

&nbsp;                   if (!backupData.tools || !Array.isArray(backupData.tools)) {

&nbsp;                       showNotification('Arquivo de backup inválido.', 'error');

&nbsp;                       return;

&nbsp;                   }

&nbsp;                   

&nbsp;                   if (!confirm(`Restaurar backup com ${backupData.tools.length} itens? Os dados atuais serão substituídos.`)) {

&nbsp;                       return;

&nbsp;                   }

&nbsp;                   

&nbsp;                   tools = backupData.tools;

&nbsp;                   await saveTools();

&nbsp;                   updateInterface();

&nbsp;                   

&nbsp;                   showNotification(`${backupData.tools.length} itens restaurados!`, 'success');

&nbsp;                   

&nbsp;               } catch (error) {

&nbsp;                   console.error('Erro ao restaurar backup:', error);

&nbsp;                   showNotification('Erro ao restaurar backup.', 'error');

&nbsp;               }

&nbsp;           };

&nbsp;           

&nbsp;           reader.onerror = function() {

&nbsp;               showNotification('Erro ao ler arquivo.', 'error');

&nbsp;           };

&nbsp;           

&nbsp;           reader.readAsText(file);

&nbsp;       }



&nbsp;       // Exportar para Excel

&nbsp;       async function exportToExcel(range = 'all') {

&nbsp;           try {

&nbsp;               // Mostrar loader

&nbsp;               const loader = document.getElementById('exportLoader');

&nbsp;               loader.style.display = 'block';

&nbsp;               

&nbsp;               // Filtrar itens

&nbsp;               let filteredTools = tools;

&nbsp;               

&nbsp;               if (range === 'available') {

&nbsp;                   filteredTools = tools.filter(tool => tool.status === 'Disponível');

&nbsp;               } else if (range === 'inuse') {

&nbsp;                   filteredTools = tools.filter(tool => tool.status === 'Em Uso');

&nbsp;               } else if (range === 'maintenance') {

&nbsp;                   filteredTools = tools.filter(tool => tool.status === 'Manutenção');

&nbsp;               } else if (range === 'lowstock') {

&nbsp;                   filteredTools = tools.filter(tool => {

&nbsp;                       const quantidade = parseInt(tool.quantidade) || 0;

&nbsp;                       const estoqueMinimo = parseInt(tool.estoqueMinimo) || 0;

&nbsp;                       return estoqueMinimo > 0 \&\& quantidade <= estoqueMinimo;

&nbsp;                   });

&nbsp;               }

&nbsp;               

&nbsp;               if (filteredTools.length === 0) {

&nbsp;                   loader.style.display = 'none';

&nbsp;                   showNotification('Nenhum item para exportar!', 'error');

&nbsp;                   return;

&nbsp;               }

&nbsp;               

&nbsp;               // Preparar dados

&nbsp;               const exportData = filteredTools.map(tool => ({

&nbsp;                   'Código': tool.code,

&nbsp;                   'Nome do Produto': tool.name,

&nbsp;                   'Patrimônio': tool.patrimonio || '',

&nbsp;                   'N.C.M.': tool.ncm,

&nbsp;                   'Categoria': tool.category,

&nbsp;                   'Status': tool.status,

&nbsp;                   'Localização': tool.location,

&nbsp;                   'Condição': tool.condition,

&nbsp;                   'Nota Fiscal': tool.notaFiscal || '',

&nbsp;                   'Unidade': tool.unidade || 'UN',

&nbsp;                   'Preço': tool.preco ? parseFloat(tool.preco).toFixed(2) : '0.00',

&nbsp;                   'Quantidade': tool.quantidade || 1,

&nbsp;                   'Estoque Mínimo': tool.estoqueMinimo || 0,

&nbsp;                   'Estoque Máximo': tool.estoqueMaximo || 0,

&nbsp;                   'Descrição': tool.description || '',

&nbsp;                   'Observações': tool.observations || '',

&nbsp;                   'Data Cadastro': tool.dataCadastro || ''

&nbsp;               }));

&nbsp;               

&nbsp;               // Criar worksheet

&nbsp;               const ws = XLSX.utils.json\_to\_sheet(exportData);

&nbsp;               

&nbsp;               // Criar workbook

&nbsp;               const wb = XLSX.utils.book\_new();

&nbsp;               XLSX.utils.book\_append\_sheet(wb, ws, 'Ferramentas');

&nbsp;               

&nbsp;               // Ajustar largura das colunas

&nbsp;               const wscols = \[

&nbsp;                   { wch: 15 }, { wch: 30 }, { wch: 20 }, { wch: 15 }, { wch: 20 },

&nbsp;                   { wch: 15 }, { wch: 20 }, { wch: 15 }, { wch: 20 }, { wch: 10 },

&nbsp;                   { wch: 15 }, { wch: 10 }, { wch: 15 }, { wch: 15 }, { wch: 40 },

&nbsp;                   { wch: 40 }, { wch: 15 }

&nbsp;               ];

&nbsp;               ws\['!cols'] = wscols;

&nbsp;               

&nbsp;               // Gerar nome do arquivo

&nbsp;               const fileName = `ferramentas\_${range}\_${new Date().toISOString().slice(0, 10)}.xlsx`;

&nbsp;               

&nbsp;               // Salvar arquivo

&nbsp;               XLSX.writeFile(wb, fileName);

&nbsp;               

&nbsp;               // Adicionar ao histórico

&nbsp;               addToExportHistory(range, filteredTools.length);

&nbsp;               

&nbsp;               showNotification(`${filteredTools.length} itens exportados!`, 'success');

&nbsp;               

&nbsp;           } catch (error) {

&nbsp;               console.error('Erro ao exportar Excel:', error);

&nbsp;               showNotification('Erro ao exportar.', 'error');

&nbsp;           } finally {

&nbsp;               document.getElementById('exportLoader').style.display = 'none';

&nbsp;           }

&nbsp;       }



&nbsp;       function addToExportHistory(range, count) {

&nbsp;           const exportHistory = document.getElementById('exportHistory');

&nbsp;           if (!exportHistory) return;

&nbsp;           

&nbsp;           const rangeText = {

&nbsp;               'all': 'Todos os itens',

&nbsp;               'available': 'Itens disponíveis',

&nbsp;               'inuse': 'Itens em uso',

&nbsp;               'maintenance': 'Itens em manutenção',

&nbsp;               'lowstock': 'Itens com estoque baixo'

&nbsp;           }\[range] || range;

&nbsp;           

&nbsp;           const historyItem = document.createElement('div');

&nbsp;           historyItem.style.cssText = `

&nbsp;               display: flex; justify-content: space-between; align-items: center;

&nbsp;               padding: 15px; border-bottom: 1px solid var(--border-color);

&nbsp;           `;

&nbsp;           

&nbsp;           historyItem.innerHTML = `

&nbsp;               <div>

&nbsp;                   <p style="font-weight: 500; margin-bottom: 5px;">${rangeText}</p>

&nbsp;                   <p style="font-size: 14px; color: var(--gray-color);">${count} itens exportados</p>

&nbsp;               </div>

&nbsp;               <div>

&nbsp;                   <span class="status-badge status-ontrack">Excel</span>

&nbsp;                   <p style="font-size: 14px; color: var(--gray-color); margin-top: 5px;">${new Date().toLocaleString('pt-BR')}</p>

&nbsp;               </div>

&nbsp;           `;

&nbsp;           

&nbsp;           if (exportHistory.querySelector('p')) {

&nbsp;               exportHistory.innerHTML = '';

&nbsp;           }

&nbsp;           

&nbsp;           exportHistory.insertBefore(historyItem, exportHistory.firstChild);

&nbsp;       }



&nbsp;       // ============================================

&nbsp;       // EVENT LISTENERS (ATUALIZADOS)

&nbsp;       // ============================================



&nbsp;       document.addEventListener('DOMContentLoaded', function() {

&nbsp;           // Verificar sessão ativa

&nbsp;           checkSession();

&nbsp;           

&nbsp;           // Configurar data atual no rodapé

&nbsp;           document.getElementById('currentDate').textContent = new Date().toLocaleDateString('pt-BR');

&nbsp;           

&nbsp;           // ===== LOGIN =====

&nbsp;           document.getElementById('loginBtn').addEventListener('click', login);

&nbsp;           

&nbsp;           // Permitir login com Enter

&nbsp;           document.getElementById('loginPassword').addEventListener('keypress', function(e) {

&nbsp;               if (e.key === 'Enter') {

&nbsp;                   login();

&nbsp;               }

&nbsp;           });

&nbsp;           

&nbsp;           // ===== LOGOUT =====

&nbsp;           document.getElementById('logoutBtn').addEventListener('click', logout);

&nbsp;           

&nbsp;           // ===== TABS =====

&nbsp;           document.querySelectorAll('.tab-button').forEach(button => {

&nbsp;               button.addEventListener('click', function() {

&nbsp;                   const tabId = this.getAttribute('data-tab');

&nbsp;                   

&nbsp;                   document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));

&nbsp;                   document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));

&nbsp;                   

&nbsp;                   this.classList.add('active');

&nbsp;                   document.getElementById(tabId).classList.add('active');

&nbsp;                   

&nbsp;                   if (tabId === 'catalogo') {

&nbsp;                       loadToolsList();

&nbsp;                   }

&nbsp;                   

&nbsp;                   if (tabId !== 'cadastro') {

&nbsp;                       isEditing = false;

&nbsp;                       editingToolId = null;

&nbsp;                       document.getElementById('saveToolBtn').innerHTML = '<i class="fas fa-save"></i> Salvar Item';

&nbsp;                   }

&nbsp;               });

&nbsp;           });

&nbsp;           

&nbsp;           // ===== BANCO DE DADOS =====

&nbsp;           document.getElementById('saveConfigBtn').addEventListener('click', async function() {

&nbsp;               // Verificar permissão

&nbsp;               if (currentUser.role !== 'dev') {

&nbsp;                   showNotification('Apenas usuários DEV podem configurar o banco de dados.', 'error');

&nbsp;                   return;

&nbsp;               }

&nbsp;               

&nbsp;               dbConfig.url = document.getElementById('supabaseUrl').value.trim();

&nbsp;               dbConfig.key = document.getElementById('supabaseKey').value.trim();

&nbsp;               

&nbsp;               localStorage.setItem('supabaseConfig', JSON.stringify(dbConfig));

&nbsp;               

&nbsp;               if (await setupSupabaseClient()) {

&nbsp;                   showNotification('Configuração salva com sucesso!', 'success');

&nbsp;               }

&nbsp;           });

&nbsp;           

&nbsp;           document.getElementById('testConnectionBtn').addEventListener('click', async function() {

&nbsp;               if (!supabaseClient) {

&nbsp;                   showNotification('Configure as credenciais primeiro.', 'error');

&nbsp;                   return;

&nbsp;               }

&nbsp;               

&nbsp;               const result = await testSupabaseConnection();

&nbsp;               showNotification(result.message, result.success ? 'success' : 'error');

&nbsp;           });

&nbsp;           

&nbsp;           document.getElementById('createTableBtn').addEventListener('click', createTableInSupabase);

&nbsp;           

&nbsp;           document.getElementById('resetConfigBtn').addEventListener('click', function() {

&nbsp;               // Verificar permissão

&nbsp;               if (currentUser.role !== 'dev') {

&nbsp;                   showNotification('Apenas usuários DEV podem redefinir configuração.', 'error');

&nbsp;                   return;

&nbsp;               }

&nbsp;               

&nbsp;               if (confirm('Redefinir configuração do Supabase?')) {

&nbsp;                   localStorage.removeItem('supabaseConfig');

&nbsp;                   document.getElementById('supabaseUrl').value = '';

&nbsp;                   document.getElementById('supabaseKey').value = '';

&nbsp;                   supabaseClient = null;

&nbsp;                   isOnlineMode = false;

&nbsp;                   updateHeaderStats();

&nbsp;                   showNotification('Configuração redefinida!', 'success');

&nbsp;               }

&nbsp;           });

&nbsp;           

&nbsp;           // ===== SINCRONIZAÇÃO =====

&nbsp;           document.getElementById('syncToOnlineBtn').addEventListener('click', syncToSupabase);

&nbsp;           document.getElementById('syncFromOnlineBtn').addEventListener('click', syncToSupabase); // Enviar para nuvem

&nbsp;           document.getElementById('syncFromOnlineBtn2').addEventListener('click', fetchFromSupabase);

&nbsp;           document.getElementById('syncBothBtn').addEventListener('click', async function() {

&nbsp;               await syncToSupabase();

&nbsp;               await fetchFromSupabase();

&nbsp;           });

&nbsp;           

&nbsp;           // ===== IMAGEM =====

&nbsp;           document.getElementById('captureImageBtn').addEventListener('click', function() {

&nbsp;               // Verificar permissão

&nbsp;               if (currentUser.role === 'user') {

&nbsp;                   showNotification('Usuário não tem permissão para adicionar imagens.', 'error');

&nbsp;                   return;

&nbsp;               }

&nbsp;               document.getElementById('imageUploadInput').click();

&nbsp;           });

&nbsp;           

&nbsp;           document.getElementById('uploadImageBtn').addEventListener('click', function() {

&nbsp;               // Verificar permissão

&nbsp;               if (currentUser.role === 'user') {

&nbsp;                   showNotification('Usuário não tem permissão para adicionar imagens.', 'error');

&nbsp;                   return;

&nbsp;               }

&nbsp;               document.getElementById('imageUploadInput').click();

&nbsp;           });

&nbsp;           

&nbsp;           document.getElementById('clearImageBtn').addEventListener('click', function() {

&nbsp;               // Verificar permissão

&nbsp;               if (currentUser.role === 'user') {

&nbsp;                   showNotification('Usuário não tem permissão para modificar imagens.', 'error');

&nbsp;                   return;

&nbsp;               }

&nbsp;               document.getElementById('cameraPlaceholder').style.display = 'block';

&nbsp;               document.getElementById('toolImagePreview').style.display = 'none';

&nbsp;               document.getElementById('toolImagePreview').src = '';

&nbsp;               currentToolImage = null;

&nbsp;           });

&nbsp;           

&nbsp;           document.getElementById('imageUploadInput').addEventListener('change', function(e) {

&nbsp;               const file = e.target.files\[0];

&nbsp;               if (!file) return;

&nbsp;               

&nbsp;               if (!file.type.match('image.\*')) {

&nbsp;                   showNotification('Selecione uma imagem!', 'error');

&nbsp;                   return;

&nbsp;               }

&nbsp;               

&nbsp;               if (file.size > 5 \* 1024 \* 1024) {

&nbsp;                   showNotification('A imagem é muito grande. Máximo: 5MB', 'error');

&nbsp;                   return;

&nbsp;               }

&nbsp;               

&nbsp;               const reader = new FileReader();

&nbsp;               reader.onload = function(event) {

&nbsp;                   currentToolImage = event.target.result;

&nbsp;                   document.getElementById('cameraPlaceholder').style.display = 'none';

&nbsp;                   document.getElementById('toolImagePreview').style.display = 'block';

&nbsp;                   document.getElementById('toolImagePreview').src = currentToolImage;

&nbsp;               };

&nbsp;               reader.readAsDataURL(file);

&nbsp;               

&nbsp;               this.value = '';

&nbsp;           });

&nbsp;           

&nbsp;           // ===== FORMULÁRIO =====

&nbsp;           document.getElementById('saveToolBtn').addEventListener('click', saveTool);

&nbsp;           

&nbsp;           document.getElementById('saveAndNewBtn').addEventListener('click', async function() {

&nbsp;               if (await saveTool()) {

&nbsp;                   clearForm();

&nbsp;                   if (document.getElementById('catalogo').classList.contains('active')) {

&nbsp;                       loadToolsList();

&nbsp;                   }

&nbsp;               }

&nbsp;           });

&nbsp;           

&nbsp;           document.getElementById('clearFormBtn').addEventListener('click', clearForm);

&nbsp;           

&nbsp;           document.getElementById('generateQRCodeBtn').addEventListener('click', function() {

&nbsp;               showNotification('Preencha o formulário primeiro.', 'info');

&nbsp;           });

&nbsp;           

&nbsp;           // ===== FILTROS =====

&nbsp;           document.getElementById('filterAllBtn').addEventListener('click', () => loadToolsList('all'));

&nbsp;           document.getElementById('filterAvailableBtn').addEventListener('click', () => loadToolsList('available'));

&nbsp;           document.getElementById('filterInUseBtn').addEventListener('click', () => loadToolsList('inuse'));

&nbsp;           document.getElementById('filterLowStockBtn').addEventListener('click', () => loadToolsList('lowstock'));

&nbsp;           

&nbsp;           // ===== BUSCA =====

&nbsp;           document.getElementById('searchTool')?.addEventListener('input', () => loadToolsList());

&nbsp;           

&nbsp;           // ===== BACKUP =====

&nbsp;           document.getElementById('backupBtn').addEventListener('click', createBackup);

&nbsp;           document.getElementById('quickBackupBtn').addEventListener('click', createBackup);

&nbsp;           

&nbsp;           document.getElementById('restoreBtn').addEventListener('click', function() {

&nbsp;               // Verificar permissão

&nbsp;               if (currentUser.role === 'user') {

&nbsp;                   showNotification('Usuário não tem permissão para restaurar backup.', 'error');

&nbsp;                   return;

&nbsp;               }

&nbsp;               document.getElementById('restoreFileInput').click();

&nbsp;           });

&nbsp;           

&nbsp;           document.getElementById('restoreFileInput').addEventListener('change', function(e) {

&nbsp;               const file = e.target.files\[0];

&nbsp;               if (!file) return;

&nbsp;               

&nbsp;               if (!file.name.endsWith('.json')) {

&nbsp;                   showNotification('Selecione um arquivo JSON.', 'error');

&nbsp;                   return;

&nbsp;               }

&nbsp;               

&nbsp;               handleRestoreBackup(file);

&nbsp;               this.value = '';

&nbsp;           });

&nbsp;           

&nbsp;           // ===== EXPORTAÇÃO =====

&nbsp;           document.getElementById('exportExcelBtn').addEventListener('click', function() {

&nbsp;               const range = document.getElementById('exportRange').value;

&nbsp;               exportToExcel(range);

&nbsp;           });

&nbsp;           

&nbsp;           // ===== MODAIS =====

&nbsp;           document.getElementById('closeModalBtn').addEventListener('click', function() {

&nbsp;               document.getElementById('toolModal').style.display = 'none';

&nbsp;           });

&nbsp;           

&nbsp;           document.getElementById('closeQRModalBtn').addEventListener('click', function() {

&nbsp;               document.getElementById('qrModal').style.display = 'none';

&nbsp;           });

&nbsp;           

&nbsp;           document.getElementById('toolModal').addEventListener('click', function(e) {

&nbsp;               if (e.target === this) {

&nbsp;                   this.style.display = 'none';

&nbsp;               }

&nbsp;           });

&nbsp;           

&nbsp;           document.getElementById('qrModal').addEventListener('click', function(e) {

&nbsp;               if (e.target === this) {

&nbsp;                   this.style.display = 'none';

&nbsp;               }

&nbsp;           });

&nbsp;           

&nbsp;           // ===== LIMPAR CACHE =====

&nbsp;           document.getElementById('clearCacheBtn').addEventListener('click', async function() {

&nbsp;               // Verificar permissão

&nbsp;               if (currentUser.role === 'user') {

&nbsp;                   showNotification('Usuário não tem permissão para limpar cache.', 'error');

&nbsp;                   return;

&nbsp;               }

&nbsp;               

&nbsp;               if (confirm('Limpar todos os dados locais? Esta ação não pode ser desfeita.')) {

&nbsp;                   localStorage.removeItem('tools');

&nbsp;                   tools = getExampleTools();

&nbsp;                   await saveTools();

&nbsp;                   updateInterface();

&nbsp;                   showNotification('Dados locais limpos!', 'success');

&nbsp;               }

&nbsp;           });

&nbsp;           

&nbsp;           // ===== OTIMIZAR =====

&nbsp;           document.getElementById('optimizeStorageBtn').addEventListener('click', function() {

&nbsp;               showNotification('Sistema otimizado!', 'success');

&nbsp;           });

&nbsp;       });

&nbsp;   </script>

</body>

</html>

